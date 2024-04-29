import React, { useState } from "react";

interface PaginationProps {
  result: number | undefined;
  limit: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  result,
  limit,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil((result as number) / limit);

  const scrollToTop = () => {
    window.scrollTo({ top: 512});
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      if (onPageChange) {
        onPageChange(newPage);
      }
      scrollToTop();
      return newPage;
    });
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => {
      const newPage = prev + 1;
      if (onPageChange) {
        onPageChange(newPage);
      }
      scrollToTop();

      return newPage;
    });
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(() => {
      if (onPageChange) {
        onPageChange(page);
      }
      scrollToTop();

      return page;
    });
  };

  return (
    <div>
      <div className="flex justify-center iphone12:gap-5 md:gap-9">
        {currentPage === 1 ? null : (
          <button
            className="bg-secondary-200 hover:bg-primary hover:text-white text-xl iphone12:h-10 iphone12:w-20 md:h-12 md:w-24 flex justify-center items-center rounded-lg"
            onClick={handlePrevClick}
          >
            Prev
          </button>
        )}

        <div className="bg-primary text-white iphone12:text-base md:text-xl iphone12:size-10 md:size-12 flex justify-center items-center rounded-lg">
          {currentPage}
        </div>

        {currentPage + 1 <= totalPages && (
          <button
            className="bg-secondary-200 hover:bg-primary hover:text-white iphone12:text-base md:text-xl iphone12:size-10 md:size-12 flex justify-center items-center rounded-lg"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        )}

        {currentPage + 2 <= totalPages && (
          <button
            className="bg-secondary-200 hover:bg-primary hover:text-white iphone12:text-base md:text-xl iphone12:size-10 md:size-12 flex justify-center items-center rounded-lg"
            onClick={() => handlePageClick(currentPage + 2)}
          >
            {currentPage + 2}
          </button>
        )}

        {currentPage !== totalPages && (
          <button
            className="bg-secondary-200 hover:bg-primary hover:text-white text-xl iphone12:h-10 iphone12:w-20 md:h-12 md:w-24 flex justify-center items-center rounded-lg"
            onClick={handleNextClick}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
