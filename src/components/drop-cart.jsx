import React from "react";
import { HandleDropDown } from "../hooks/getContext";
import { Cartitem } from "./cart-item";
import { HandleProductContext } from "../hooks/getContext";
import { useNavigate } from "react-router-dom";

export const DropCart = () => {
  const navigation = useNavigate()
    const { setDropCart } = HandleDropDown()
    const { cartItems } = HandleProductContext()

    const handleNavigation = () => {
      navigation("/checkout")
      setDropCart(false)
    }

  return (
    <div onClick={() => setDropCart(false)} className="absolute w-3/12 top-[90px] right-0 z-[100] bg-white border-black border-2 ">
      <div className="w-full h-5/6 flex flex-col relative ">
        <div className="overflow-y-scroll w-full max max-h-[60vh]">
            <h1 className="text-center w-full py-3 font-bold text-xl">My Cart</h1>
           {cartItems.length >= 1 ? cartItems.map((item, i) => (
              <Cartitem  items={item} key={i}/>
            )) : <p className="text-center text-green-400">Add item to chart</p>}
        </div>
        
      </div>
      {cartItems.length >= 1 && <button onClick={handleNavigation} className="bg-black/60 text-white p-3 font-bold text-2xl  w-full">Check Out</button>}
    </div>
  );
};
