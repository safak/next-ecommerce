"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select
                    name="type"
                    id=""
                    className="py-2 pl-4 pr-10 rounded-2xl text-xs font-medium bg-[#EBEDED] appearance-none"
                    onChange={handleFilterChange}
                    style={{
                        background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>') no-repeat right 8px center`,
                        backgroundColor: '#EBEDED',
                        backgroundSize: '1rem',
                    }}
                >
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>


                <input
                    type="text"
                    name="min"
                    placeholder="min price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="max"
                    placeholder="max price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                    onChange={handleFilterChange}
                />
                {/* TODO: Filter Categories */}
                {/* Category Dropdown */}
                <select
                    name="cat"
                    className="py-2 pl-4 pr-10 rounded-2xl text-xs font-medium bg-[#EBEDED] appearance-none"
                    onChange={handleFilterChange}
                    style={{
                        background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>') no-repeat right 8px center`,
                        backgroundColor: '#EBEDED',
                        backgroundSize: '1rem',
                    }}
                >
                    <option>Category</option>
                    <option value="">New Arrival</option>
                    <option value="">Popular</option>
                </select>

                {/* All Filters Dropdown */}
                <select
                    name=""
                    id=""
                    className="py-2 pl-4 pr-10 rounded-2xl text-xs font-medium bg-[#EBEDED] appearance-none"
                    style={{
                        background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>') no-repeat right 8px center`,
                        backgroundColor: '#EBEDED',
                        backgroundSize: '1rem',
                    }}
                >
                    <option>All Filters</option>
                </select>
                </div>

                <div>
                    {/* Sort By Dropdown */}
                <select
                    name="sort"
                    id=""
                    className="py-2 pl-4 pr-10 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400 appearance-none"
                    onChange={handleFilterChange}
                    style={{
                        background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>') no-repeat right 8px center`,
                        backgroundColor: 'white',
                        backgroundSize: '1rem',
                    }}
                >
                    <option>Sort By</option>
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