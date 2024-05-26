"use client";

import { useRouter } from "next/navigation";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const Searchbar = () => {
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
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 py-2 px-4 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Recherche..."
        className="bg-transparent placeholder:font-light placeholder:text-sm flex-1 outline-none text-gray-500"
      />
      <div className="cursor-pointer">
        <PiMagnifyingGlassBold className="text-xl text-gray-500" />
      </div>
    </form>
  );
};

export default Searchbar;
