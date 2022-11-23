import React from "react";
import images from "../assets";
import { HandleProductContext } from "../hooks/getContext";
import { HandleDropDown } from "../hooks/getContext";

export const Carticon = () => {
  const { cartCount} = HandleProductContext()
  const {setDropCart} = HandleDropDown()

  return (
    <div className="relative cursor-pointer w-12 h-12" onClick={() => setDropCart((prev) => !prev)}>
      <img src={images.shopingbag} alt="shopping chart" className="w-full h-full" />
      <h3 className="absolute top-1/3 left-1/3 text-center">{cartCount}</h3>
    </div>
  );
};
