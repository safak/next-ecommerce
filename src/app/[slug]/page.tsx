import ProductImages from "@/components/ProductImages";
import ProductPageOptions from "@/components/ProductPageOptions";

const SinglePage = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Le Pinky Nefertiti Kama</h1>

        {/* <div className="h-[2px] bg-gray-100" /> */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg text-gray-500 line-through ">49€</h3>
          <h2 className="font-medium text-2xl ">29€</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />

        <ProductPageOptions />
        <div className="h-[2px] bg-gray-100" />
        <div className="">
          <h4 className="text-xs uppercase font-bold mb-4">Description</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            quibusdam animi dolor dolores, ipsam deserunt aliquid minus
            cupiditate harum repellat, earum inventore? Beatae assumenda dicta,
            veniam cupiditate officia ipsa officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
