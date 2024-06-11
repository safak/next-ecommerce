import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../lib/wixCllientServer";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit, searchParams }) => {
  const wixClient = await wixClientServer();

  let products = [];

  try {
    products = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit || PRODUCT_PER_PAGE)
      .find();
  } catch (error) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products?.items?.map((product) => {
        return (
          <Link
            key={product._id}
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt="product image"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-sm z-10 hover:opacity-0 transition-all ease-in duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image.url || "/product.png"}
                  alt="product image"
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-sm"
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.price?.price}$</span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}
            <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#0c0c0c] transition-all ease-in-out duration-700 hover:border-[#0c0c0c] hover:border">
              ADD TO CART
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
