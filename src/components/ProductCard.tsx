import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="cursor-pointer">
        <div className="relative w-full h-64 sm:h-96 lg:h-80 ring-1 ring-gray-300 rounded-lg">
          <Image
            src="/product-1.jpeg"
            alt="baya bin bin oshun jewelry bijoux fantaisie"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Link>
      <div className="flex justify-between">
        <span className="font-medium">Baya Noir et Or Pierre de Lune</span>
        <span className="font-semibold">29€</span>
      </div>
      <p className="text-sm text-gray-500">My description</p>
      <Button href="/">Ajouter au panier</Button>
    </div>
  );
};

export default ProductCard;
