"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  // hook from next js that handle the user redirect
  const router = useRouter();

  // Function that handle user redirect to the searching product
  const searchSubmitHandler = () => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const product = formData.get("name");

    if (product) {
      router.push(`/list?product=${product}`);
    }
  };

  return (
    <form
      className="flex justify-between gap-4 bg-gray-100 p-2 rounded-xl flex-1"
      onSubmit={searchSubmitHandler}
    >
      <input
        type="text"
        placeholder="Search"
        name="product"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image
          src="/search.png"
          alt="search input icon"
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
