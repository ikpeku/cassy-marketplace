import React from "react";
import { HandleProductContext } from "../hooks/getContext";

export const Shopcard = ({ product }) => {
  const {addItemsToCart} = HandleProductContext()

  const handleAddItems = () => addItemsToCart(product)

  return (
    <div className="">
      <div className="group h-full">
        <div className="relative h-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            title={product.name}
            className="w-full h-full object-fill"
          />
          <button onClick={handleAddItems} className="absolute inset-x-0 bottom-16 h-16 w-5/6 bg-slate-500 mx-auto hover:scale-105 text-white group-hover:visible invisible text-2xl ">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <span>{product.name}</span>
      <span>{product.price}</span>
      </div>
    </div>
  );
};
