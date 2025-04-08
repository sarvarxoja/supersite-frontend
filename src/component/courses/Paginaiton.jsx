import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    let pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        &#8249;
      </button>

      {generatePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          } ${page === "..." ? "pointer-events-none" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        &#8250;
      </button>
    </div>
  );
};
