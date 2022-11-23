import React, { useEffect } from 'react'
import { HandleProductContext } from '../hooks/getContext'
import { useNavigate } from 'react-router-dom'



export const Checkout = () => {
  const {
    cartItems,
    addItemsToCart,
    removeFromCart,
    removeAllitems,
    totalCart,
    cartCount
  } = HandleProductContext()

const navigate = useNavigate()
const newCart = [...cartItems]


const items = 
  newCart.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-5 items-center text-center mb-5 border-b-2 border-collapse py-5"
    >
      <img
        src={item.imageUrl}
        alt="item"
        className="border h-44 object-cover"
      />
      <p>{item.name}</p>
      <div className="flex items-center cursor-pointer justify-center text-center">
        <span
          onClick={() => removeFromCart(item)}
          className="font-extrabold text-3xl "
        >
          {' < '}{' '}
        </span>
        <p className="font-lg px-3">{item.quantity}</p>
        <span
          onClick={() => addItemsToCart(item)}
          className="font-extrabold text-3xl"
        >
          {' '}
          {' > '}
        </span>
      </div>
      <p>
        <span className="font-semibold text-lg">$</span>
        {item.price}
      </p>
      <h1
        onClick={() => removeAllitems(item)}
        className="text-3xl font-extrabold text-center cursor-pointer"
      >
        x
      </h1>
    </div>
  ))


  
  useEffect(() => {
if(cartCount === 0){
  navigate("/shop")
}

  }, [cartCount, navigate])
  const nav = ['product', 'description', 'quantity', 'price', 'remove']



  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <ul className="grid grid-cols-5 border-b-2 border-collapse border-gray-500 pb-5">
        {nav.map((link, index) => (
          <li
            key={index}
            className="font-bold text-2xl text-gray-500/90 text-center"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className='min-h-[70vh]'>
      {newCart && items}
      </div>
      <div className="flex justify-end py-5 border-t-2 border-gray-300 border-separate">
        <span className="text-2xl font-semibold">Total: ${totalCart}</span>
      </div>
    </div>
  )
}
