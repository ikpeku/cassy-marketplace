import { createContext, useEffect, useState } from 'react'
import products from '../components/ categories.json'
// import { SHOP_DATA } from '../Shop_Data'
// import { addColAndDoc } from '../utils/firebase.utils.db'


export const productContext = createContext({
  allproduct: [],
  SetAllProducts: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeFromCart: () => {},
  removeAllitems: () => {},
  cartCount: 0,
  setCartCount: 0,
})

const itemsQuantity = (cartItems, itemsToAdd) => {
  const exists = cartItems.find((item) => item.id === itemsToAdd.id)

  if (exists) {
    return cartItems.map((item) =>
      item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item,
    )
  }

  return [...cartItems, { ...itemsToAdd, quantity: 1 }]
}

const itemsReduceQuantity = (cartItems, itemsToRemove) => {
  const exists = cartItems.find((item) => item.id === itemsToRemove.id)

  if (exists.quantity === 1) {
    if (window.confirm('confirm to remove item from cart')) {
      return cartItems.filter((item) => item.id !== itemsToRemove.id)
    } else {
      return cartItems
    }
  }

  if (exists) {
    return cartItems.map((item) =>
      item.id === exists.id ? { ...item, quantity: item.quantity - 1 } : item,
    )
  }
}

const removeSelected = (cartItems, selecteditem) => {
  const exists = cartItems.find((item) => item.id === selecteditem.id)

  if (exists) {
    if (window.confirm('confirm to remove item from cart')) {
        return cartItems.filter((item) => item.id !== selecteditem.id)
    } else {
        return cartItems
    }

  }
}

export const ProductProvider = ({ children }) => {
  const [allproduct, SetAllProducts] = useState(products)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalCart, setTotalCart] = useState(0)



  const addItemsToCart = (itemsToAdd) => {
    setCartItems(itemsQuantity(cartItems, itemsToAdd))
  }

  const removeFromCart = (itemToRemove) => {
    setCartItems(itemsReduceQuantity(cartItems, itemToRemove))
  }

  const removeAllitems = (itemsRemove) => {
    setCartItems(removeSelected(cartItems, itemsRemove))
  }

  useEffect(() => {
    const total = cartItems.reduce((total, finalTotal) => {
      return total + finalTotal.quantity * finalTotal.price
    }, 0)
    setTotalCart(total)
  }, [cartItems])

  useEffect(() => {
    const picks = cartItems.reduce((lastcount, currentCount) => {
      return lastcount + currentCount.quantity
    }, 0)
    setCartCount(picks)
  }, [cartItems])

  // console.log(SHOP_DATA)




  return (
    <productContext.Provider
      value={{
        allproduct,
        SetAllProducts,
        addItemsToCart,
        cartItems,
        cartCount,
        removeFromCart,
        removeAllitems,
        totalCart,
      }}
    >
      {children}
    </productContext.Provider>
  )
}
