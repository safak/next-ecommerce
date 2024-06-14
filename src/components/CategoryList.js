import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../lib/wixCllientServer";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  let categories = [];

  try {
    categories = await wixClient.collections.queryCollections().find();
  } catch (error) {
    return <div>Error fetching Categories</div>;
  }

  return (
    <div className="px-4 mr-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories?.items?.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/list?category=${category.slug}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={category.media?.mainMedia?.image?.url || "/cat.png"}
                  alt="category image"
                  fill
                  sizes="20vw"
                  className="object-cover rounded-sm"
                />
              </div>
              <h1 className="mt-8 font-light text-clip tracking-wide">
                {category.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
