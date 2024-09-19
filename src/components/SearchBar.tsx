"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
            <input type=" " name="name" placeholder="Search" className="flex-1 bg-transparent outline-none pl-2" />
            <button className="cursor-pointer">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 ml-1" />
            </button>
        </form>
    )
}

export default SearchBar