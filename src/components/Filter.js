"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  // Get the current pathname
  const pathname = usePathname();

  // Get the current search parameters
  const searchParams = useSearchParams();

  // Navigate programmatically using the replace function
  const { replace } = useRouter();

  // Function to create a new URL with the updated filters
  const handleFilterChange = (e) => {
    // Get the the name & value from the user click or changes
    const { name, value } = e.target;

    // Create a new URLSearchParams object based on the current search parameters
    const params = new URLSearchParams(searchParams);

    // Set the name parameter to the value
    params.set(name, value);

    // Navigate to the new URL with the updated search parameters
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
          onClick={handleFilterChange}
        >
          <option disabled="disabled">Type</option>
          <option value="digital">Online</option>
          <option value="physical">In Store</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-3 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-3 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
          onChange={handleFilterChange}
        >
          <option disabled="disabled">Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded]"
          onChange={handleFilterChange}
        >
          <option disabled="disabled">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
