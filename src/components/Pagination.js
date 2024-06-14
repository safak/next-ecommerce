"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, hasPrev, hasNext }) => {
  // Get the current pathname
  const pathname = usePathname();

  // Get the current search parameters
  const searchParams = useSearchParams();

  // Navigate programmatically using the replace function
  const { replace } = useRouter();

  // Function to create a new URL with the updated page number
  const createPageUrl = (pageNumber) => {
    // Create a new URLSearchParams object based on the current search parameters
    const params = new URLSearchParams(searchParams);

    // Set the 'page' parameter to the new page number
    params.set("page", pageNumber.toString());

    // Navigate to the new URL with the updated search parameters
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] cursor-pointer p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] cursor-pointer p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
