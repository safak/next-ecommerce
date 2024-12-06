
import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
    return(
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image src="https://images.pexels.com/photos/16633042/pexels-photo-16633042/free-photo-of-woman-and-man-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-all easy duration-500"/>

                <Image src="https://images.pexels.com/photos/10822324/pexels-photo-10822324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>

                <div className="text-sm text-gray-500 "> My Description </div>

                <button className="rounded-2xl ring-2 ring-black text-black py-2 px-4 text-sm hover:bg-black hover:text-white w-max">Add to cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image src="https://images.pexels.com/photos/16633042/pexels-photo-16633042/free-photo-of-woman-and-man-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-all easy duration-500"/>

                <Image src="https://images.pexels.com/photos/10822324/pexels-photo-10822324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>

                <div className="text-sm text-gray-500 "> My Description </div>

                <button className="rounded-2xl ring-2 ring-black text-black py-2 px-4 text-sm hover:bg-black hover:text-white w-max">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image src="https://images.pexels.com/photos/16633042/pexels-photo-16633042/free-photo-of-woman-and-man-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-all easy duration-500"/>

                <Image src="https://images.pexels.com/photos/10822324/pexels-photo-10822324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>

                <div className="text-sm text-gray-500 "> My Description </div>

                <button className="rounded-2xl ring-2 ring-black text-black py-2 px-4 text-sm hover:bg-black hover:text-white w-max">Add to cart</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image src="https://images.pexels.com/photos/16633042/pexels-photo-16633042/free-photo-of-woman-and-man-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-all easy duration-500"/>

                <Image src="https://images.pexels.com/photos/10822324/pexels-photo-10822324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill sizes="25vw" className="object-cover absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>

                <div className="text-sm text-gray-500 "> My Description </div>

                <button className="rounded-2xl ring-2 ring-black text-black py-2 px-4 text-sm hover:bg-black hover:text-white w-max">Add to cart</button>
            </Link>
        </div>
    )
}

export default ProductList