"use client";

import { useEffect, useState } from "react";
import SelectQuantityAndAddToCart from "./SelectQuantityAndAddToCart";

const ProductsVariants = ({ productId, variants, productOptions }) => {
  // State to store the selected options
  const [selectedOptions, setSelectedOptions] = useState({});

  // State to store the variant that matches the selected options.
  const [selectedVariant, setSelectedVariants] = useState();

  // Update selectedVariants when ever the selectedOptions changes
  useEffect(() => {
    const variant = variants.find((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });

    setSelectedVariants(variant);
  }, [selectedOptions, variants]);

  // Function to update selectedOptions when the user selects an option.
  const handleOptionSelect = (optionType, choice) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  // Fucntion to check if the selected variant is in stock
  const isVariantInStock = (choices) => {
    // using .some() to check if at least one variant matches the criteria
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        // Ensures that every key-value pair in choices matches the corresponding key-value pair in variantChoices
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => {
        return (
          <div className="flex flex-col gap-4" key={option.name}>
            <h4 className="font-semibold">Choose a {option.name}</h4>
            <ul className="flex gap-8 items-center">
              {option.choices?.map((choice) => {
                const isDisabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name]: choice.description,
                });

                const isSelected =
                  selectedOptions[option.name] === choice.description;

                const clickHandler = isDisabled
                  ? undefined
                  : () => handleOptionSelect(option.name, choice.description);

                return option.name === "Color" ? (
                  <li
                    className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                    key={choice.value}
                    style={{
                      backgroundColor: choice.value,
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                    onClick={clickHandler}
                  >
                    {isSelected && (
                      <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    {isDisabled && (
                      <div className="absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </li>
                ) : (
                  <li
                    className="ring-1 ring-[#003366] text-[#003366] rounded-md py-1 px-4 text-sm "
                    style={{
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      backgroundColor: isSelected
                        ? "#f35c7a"
                        : isDisabled
                        ? "#fbcfeb"
                        : "#fbfbfb",
                      boxShadow: isDisabled && "none",
                      color: isSelected || isDisabled ? "#fbfbfb" : "#f35c7a",
                    }}
                    onClick={clickHandler}
                  >
                    {choice.description}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <SelectQuantityAndAddToCart
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
};

export default ProductsVariants;
