import React from "react";

export const Cartitem = ({ items }) => {
  const { name, quantity, imageUrl, price } = items;

  return (
    <div className="px-5 grid grid-cols-2 items-center gap-x-10 my-5 object-cover">
      <img src={imageUrl} alt={`${name}`} className="h-32 w-full "  />
      <div>
        <span className="font-light text-2xl">{name}</span> <br />
        <span className="font-light text-2xl">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
