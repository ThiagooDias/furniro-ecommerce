import React, { useState } from "react";

interface PaginationProps {
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrevClick = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      // Chamar o callback para informar o componente pai
      if (onPageChange) {
        onPageChange(newPage);
      }
      return newPage;
    });
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => {
      const newPage = prev + 1;
      // Chamar o callback para informar o componente pai
      if (onPageChange) {
        onPageChange(newPage);
      }
      return newPage;
    });
  };

  return (
    <div>
      <div className="flex justify-center gap-9">
        {currentPage === 1 ? null : (
          <button
            className="bg-secondary-200 hover:bg-primary hover:text-white text-xl h-12 w-24 flex justify-center items-center rounded-lg"
            onClick={handlePrevClick}

          >
            Prev
          </button>
        )}

        <div className="bg-primary text-white text-xl size-12 flex justify-center items-center rounded-lg">
          {currentPage}
        </div>

        <div className="bg-secondary-200 hover:bg-primary hover:text-white text-xl size-12 flex justify-center items-center rounded-lg">
          {currentPage + 1}
        </div>

        <div className="bg-secondary-200 hover:bg-primary hover:text-white text-xl size-12 flex justify-center items-center rounded-lg">
          {currentPage + 2}
        </div>

        <button
          className="bg-secondary-200 hover:bg-primary hover:text-white text-xl h-12 w-24 flex justify-center items-center rounded-lg"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
