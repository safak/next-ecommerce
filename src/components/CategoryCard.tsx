import Image from "next/image";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <Link
      href="/list?cat=test"
      className="cursor-pointer flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative w-full h-96 border border-gray-300 rounded-lg">
        <Image
          src="/product-1.jpeg"
          alt="baya bin bin oshun jewelry bijoux fantaisie"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="mt-8 font-semibold text-clip tracking-wide uppercase text-center">
        bayas
      </h1>
    </Link>
  );
};

export default CategoryCard;
