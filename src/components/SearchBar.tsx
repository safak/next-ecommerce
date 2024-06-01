"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <div>
      <form
        className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
        onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search...'
          name='name'
          className='flex-grow bg-transparent border-none focus:outline-none px-2'
        />
        <button
          type='submit'
          className='cursor-pointer'>
          <Image
            src='/search.png'
            alt='Search'
            width={16}
            height={16}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
