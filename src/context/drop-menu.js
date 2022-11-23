import { createContext, useState } from 'react'

export const dropProviderContext = createContext({
    dropCart: false,
    setDropCart: () => {}
})

export const CartCartProvider = ({ children }) => {

    const [dropCart, setDropCart] = useState(false)


  return <dropProviderContext.Provider value={{dropCart, setDropCart}}>{children}</dropProviderContext.Provider>
}
