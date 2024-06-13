"use client";

const Pagination = ({ currentPage, hasPrev, hasNext }) => {
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] cursor-pointer p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] cursor-pointer p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
