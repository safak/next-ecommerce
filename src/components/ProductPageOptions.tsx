"use client";

import Button from "./Button";
import SizeOption from "./SizeOption";
import QuantityOption from "./QuantityOption";

const ProductPageOptions = () => {
  return (
    <div className="flex flex-col gap-8">
      <SizeOption />
      <QuantityOption />
      <div className="flex flex-col gap-4">
        <Button href="/">Acheter</Button>
        <Button href="/" color="white">
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};

export default ProductPageOptions;
