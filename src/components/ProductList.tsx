
import Link from "next/link"
import Image from "next/image"
import { wixClientServer } from "@/libs/wixClientServer"
import { products } from "@wix/stores"
import DOMPurify from "isomorphic-dompurify"


const PRODUCT_PER_PAGE = 20

const ProductList = async ({
    shopbyWearsId,
    limit,
    searchParams,
}: {
    shopbyWearsId: string;
    limit?: number;
    searchParams?: any;
}) => {

      const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().eq("collectionIds",  shopbyWearsId).limit(limit || PRODUCT_PER_PAGE).find();

  console.log(res.items[0].price)


    return(
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">

            {res.items.map((product:products.Product)=>(

            <Link href={"/"+product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] " key={product._id}>
                <div className="relative w-full h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Image src={product.media?.mainMedia?.image?.url || "/product.png"} alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-all easy duration-500"/>

               { product.media?.items && (
                
                <Image src={product.media?.items[1]?.image?.url || "/product.png"}  alt="" fill sizes="25vw" className="object-cover absolute rounded-md "
               
               />
               )}

                </div>
                <div className="flex justify-between">
                    <span className="font-medium">{product.name}</span>
                    <div>
                        <span className="font-semibold">{product.price?.currency}</span>
                        <span className="font-semibold">{product.price?.price}</span>
                    </div>
                    
                </div>
                {product.additionalInfoSections && (
                    <div className="text-sm text-gray-500 " dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(
                        product.additionalInfoSections?.find((section:any)=>section.title==="shortDesc")?.description || ""
                    )}}>   
                </div>
                )}

                <button className="rounded-2xl ring-2 ring-black text-black py-2 px-4 text-sm hover:bg-black hover:text-white w-max">Add to cart</button>
            </Link>


            ))}
            

           
        </div>
    )
}

export default ProductList