"use client";

import { useState } from "react";

const CustomizeProducts = ({ productId, variants, productOptions }) => {
  // State to store the selected options
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function to set the selectedOptions on user click
  const handleOptionSelect = (optionType, choice) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  console.log(selectedOptions);
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => {
        return (
          <div className="flex flex-col gap-4" key={option.name}>
            <h4 className="font-semibold">Choose a {option.name}</h4>
            <ul className="flex gap-8 items-center">
              {option.choices?.map((choice) => {
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name]: choice.description,
                });

                const selected =
                  selectedOptions[option.name] === choice.description;

                const clickHandler = disabled
                  ? undefined
                  : () => handleOptionSelect(option.name, choice.description);

                return option.name === "Color" ? (
                  <li
                    className="w-8 h-8 rounded-full ring-1 ring-gray-300  relative"
                    key={option.description}
                    style={{
                      backgroundColor: choice.value,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                    onClick={clickHandler}
                  >
                    {selected && (
                      <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    {disabled && (
                      <div className="absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </li>
                ) : (
                  <li className="ring-1 ring-[#003366] text-[#003366] rounded-md py-1 px-4 text-sm cursor-pointer">
                    {choice.description}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CustomizeProducts;

/*<h4 className="font-semibold">Choose a size</h4>
      <ul className="flex gap-3 items-center">
        <li className="ring-1 ring-[#003366] text-[#003366] rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-[#003366] text-[#003366] rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-[#003366] text-[#003366] rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
      */
