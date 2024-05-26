/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";

const BannerList = () => {
  return (
    <div className="bg-yellow-50 px-4 flex flex-col md:flex-row justify-center md:justify-between h-64 rounded-lg">
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-[48px] text-gray-500">
          Jusqu'à -50% sur une <br />
          sélection de produits
        </h1>
        <Button href="/" width="normal">
          Voir les articles
        </Button>
      </div>
      <div className="relative hidden md:flex md:w-1/3">
        <Image
          src="/woman.png"
          alt="oshun jewelry banière bijoux"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BannerList;
