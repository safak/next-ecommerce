

import Image from "next/image"
import Link from "next/link"
import { wixClientServer } from "@/libs/wixClientServer"

const ShopbyWears = async () => {

    const wixClient = await wixClientServer()
    const cats = await wixClient.collections.queryCollections().find();


    return(
        <div className="px-4 overflow-scroll scrollbar-hide mt-8">
            <div className="flex gap-4 md:gap-8">
               {cats.items.map(item=> (

                <Link href={`/list?shop=${item.slug}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 " key={item._id}>
                        <div className="relative bg-slate-100 w-full h-96">
                            <Image src={item.media?.mainMedia?.image?.url || "cart.png"} alt="" fill sizes="20vw" className="object-cover"/>
                        </div>
                        <h1 className="mt-8 font-light text-cl tracking-wide">
                          { item.name }</h1>
                </Link>   
                ))}
            </div>
        </div>
    )
}

export default ShopbyWears