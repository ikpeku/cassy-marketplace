import { createContext, useReducer } from 'react'

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
  const addItemsToCart = (itemsToAdd) => {
    const newItem = itemsQuantity(cartItems, itemsToAdd)
    handleReducerLogic(newItem)
  }

  const removeFromCart = (itemToRemove) => {
    const newItem = itemsReduceQuantity(cartItems, itemToRemove)
    handleReducerLogic(newItem)
  }

  const removeAllitems = (itemsRemove) => {
    const newItem = removeSelected(cartItems, itemsRemove)
    handleReducerLogic(newItem)
  }

  const initialReducerValue = {
    allproduct: [],
    cartItems: [],
    cartCount: 0,
    totalCart: 0,
  }

  const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case 'CART_CRUD':
        return { ...state, ...payload }

      default:
        throw new Error(`No action pass for ${type}`)
    }
  }

  const [
    { allproduct, cartCount, cartItems, totalCart },
    dispatch,
  ] = useReducer(cartReducer, initialReducerValue)

  const handleReducerLogic = (newItem) => {
    const totalCart = newItem.reduce((total, finalTotal) => {
      return total + finalTotal.quantity * finalTotal.price
    }, 0)

    const cartCount = newItem.reduce((lastcount, currentCount) => {
      return lastcount + currentCount.quantity
    }, 0)

    dispatch({
      type: 'CART_CRUD',
      payload: { cartItems: newItem, totalCart, cartCount },
    })
  }

  return (
    <productContext.Provider
      value={{
        allproduct,
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
