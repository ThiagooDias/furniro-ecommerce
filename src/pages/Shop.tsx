import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";
import shopImage from "../assets/shop-image.png";
import { useLocation } from "react-router-dom";
import arrowIcon from "../assets/icon/arrow-down-alt2.svg";
import gridRoundIcon from "../assets/icon/grid-big-round.svg";
import viewListIcon from "../assets/icon/view-list.svg";
import FilterModal from "../components/FilterModal";
import { ModalFilterData } from "../interface/ModalFilterData";
import Pagination from "../components/Pagination";
import ApllyBtn from "../components/ApllyBtn";
import { useCategoryById } from "../hooks/useCategoryById";

interface FormData {
  showCount: number;
  sortBy: string;
}

const Shop: React.FC = () => {
  const location = useLocation();

  const [modalFilterData, setModalFilterData] = useState<ModalFilterData>();
  const [isNew, setIsNew] = useState<boolean | undefined>(false);
  const [withDiscount, setWithDiscount] = useState<boolean | undefined>(false);
  const [category, setCategory] = useState<number | undefined>(location.state);
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [limit, setLimit] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("DESC");
  const [page, setPage] = useState<number>(1);

  const [startIndex, setStartIndex] = useState<number | undefined>();
  const [endIndex, setEndIndex] = useState<number | undefined>();
  const [results, setResults] = useState<number | undefined>();

  const categoryName = useCategoryById(category?.toString());

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const [formData, setFormData] = useState<FormData>({
    showCount: 16,
    sortBy: "default",
  });

  useEffect(() => {
    setCategory(
      modalFilterData?.category
        ? parseInt(modalFilterData?.category)
        : location.state
    );
    setMaxPrice(
      modalFilterData?.maxPrice ? +modalFilterData?.maxPrice : undefined
    );
    setIsNew(modalFilterData?.isNew);
    setWithDiscount(modalFilterData?.withDiscount);
  }, [
    category,
    isNew,
    maxPrice,
    modalFilterData,
    limit,
    formData,
    location.state,
  ]);

  const handleModalFilterData = (data: ModalFilterData) => {
    setModalFilterData(data);
  };

  // handle form show and sort by

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "showCount" ? parseInt(value, 10) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData?.sortBy === "az") {
      setSortBy("name");
      setSortDirection("ASC");
    } else if (formData?.sortBy === "highToLow") {
      setSortBy("price");
      setSortDirection("DESC");
    } else if (formData?.sortBy === "lowToHigh") {
      setSortBy("price");
      setSortDirection("ASC");
    } else if (formData?.sortBy === "default") {
      setSortBy("");
      setSortDirection("");
    }

    setLimit(formData?.showCount);
  };

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img className="iphone12:h-52 md:w-full md:h-full" src={shopImage} alt="" />
        <div className="absolute">
          <h1 className="text-5xl font-semibold text-center mb-3">Shop</h1>
          <span className="flex justify-between">
            <p>Home</p>
            <img src={arrowIcon} alt="" />
            <p>Shop</p>
            {category && (
              <>
                <img src={arrowIcon} alt="" />
                <p>{categoryName.category?.name}</p>
              </>
            )}
          </span>
        </div>
      </div>

      <div className="iphone12:grid iphone12:gap-7 iphone12:p-5 md:flex md:h-20 bg-secondary-100 mb-16 md:px-24 justify-between items-center">
        <div className="flex items-center gap-5">
          <FilterModal onUpdate={handleModalFilterData} />

          <button className="p-1 hover:bg-orange-200 hover:rounded-md">
            <img src={gridRoundIcon} alt="grid view" />
          </button>

          <button className="p-2 hover:bg-orange-200 hover:rounded-md">
            <img src={viewListIcon} alt="list view" />
          </button>

          <div className="border-l-2 h-9 border-gray-400 pl-8 flex items-center">
            Showing {startIndex}–{endIndex} of {results} results
          </div>
        </div>

        <form className="flex gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="mr-4 text-xl" htmlFor="showCount">
              Show
            </label>
            <input
              onChange={handleInputChange}
              className="size-11 px-3 remove-arrow"
              type="number"
              name="showCount"
              id="showCount"
              placeholder="16"
              min="1"
              max="99"
              maxLength={2}
              onInput={(e) => {
                if (e.currentTarget.value.length > 2) {
                  e.currentTarget.value = e.currentTarget.value.slice(0, 2);
                }
              }}
            />
          </div>

          <div>
            <label className="mr-4 text-xl" htmlFor="sortBy">
              Sort by
            </label>
            <select
              className="h-10 px-3"
              name="sortBy"
              id="sortBy"
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="az">A - Z</option>
              <option value="highToLow">High to low </option>
              <option value="lowToHigh">Low to high</option>
            </select>
          </div>
          <ApllyBtn handleSubmit={handleSubmit} />
        </form>
      </div>

      <ProductsSection
        isNew={isNew}
        withDiscount={withDiscount}
        category={category}
        maxPrice={maxPrice}
        limit={limit}
        sortBy={sortBy}
        sortDirection={sortDirection}
        page={page}
        onPagination={(i) => {
          setEndIndex(i.endIndex);
          setStartIndex(i.startIndex);
          setResults(i.results);
        }}
      />
      <div className="flex justify-center mb-20">
        <Pagination
          limit={limit}
          result={results}
          onPageChange={handlePageChange}
        />
      </div>
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Shop;
