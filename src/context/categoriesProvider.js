import { createContext, useEffect, useState } from 'react'
import { getColAndDoc } from '../utils/firebase.utils.db'

export const categoriesProvider = createContext({
  categories: {},
  setCategories: () => {},
})

export const CategoriesContext = ({ children }) => {
  const [categories, setCategories] = useState({})

  useEffect(() => {
    // addColAndDoc( "categories" , SHOP_DATA)
    const getColectionDatas = async() => {
      const datas = await getColAndDoc("categories")
      setCategories(datas)
    }
    getColectionDatas()
  }, [])


  return (
    <categoriesProvider.Provider value={{ categories, setCategories }}>
      {children}
    </categoriesProvider.Provider>
  )
}
