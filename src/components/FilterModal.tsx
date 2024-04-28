import React, { useEffect, useRef, useState } from "react";
import filterIcon from "../assets/icon/icon_filtering.svg";
import { UseCategoriesResult } from "../interface/UseCategoriesResponse";
import { useCategories } from "../hooks/useCategories";
import { ModalFilterData } from "../interface/ModalFilterData";
import ApllyBtn from "./ApllyBtn";

interface FilterModalProps {
  onUpdate: (data: ModalFilterData) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  onUpdate,
}: FilterModalProps) => {
  const { categories }: UseCategoriesResult = useCategories();

  //Handle modal
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle form
  const [formData, setFormData] = useState<ModalFilterData>({
    category: "",
    maxPrice: "",
    isNew: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    setFormData((prevData) => {
      if (type === "checkbox") {
        const checked = (event.target as HTMLInputElement).checked;
        return {
          ...prevData,
          [name]: checked,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onUpdate(formData);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="flex gap-2 text-xl items-center p-2 hover:bg-orange-200 hover:rounded-md"
      >
        <img src={filterIcon} alt="filter" />
        Filter
      </button>
      {isOpen && (
        <form
          action=""
          className="absolute z-30 flex gap-3 flex-col bg-orange-200 border rounded-xl shadow top-full mt-1 p-4 w-60"
        >
          <h2 className="font-semibold text-xl">Filter products by:</h2>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="categories">
              Categories:
            </label>
            <select
              name="category"
              id="categories"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between">
            <label htmlFor="maxPrice">Maximum price:</label>
            <input
              className="w-16 remove-arrow"
              name="maxPrice"
              id="maxPrice"
              type="number"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center">
            <input
              className="mr-2 size-5"
              type="checkbox"
              name="isNew"
              id="isNew"
              onChange={handleChange}
            />
            <label htmlFor="isNew">New products</label>
          </div>

          {/* <div className="flex items-center">
            <input
              className="mr-2 size-5"
              type="checkbox"
              name="withDiscount"
              id="withDiscount"
            />
            <label htmlFor="withDiscount">With discount</label>
          </div> */}

          <div className="flex justify-center">
            <ApllyBtn handleSubmit={handleSubmit} />
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterModal;
