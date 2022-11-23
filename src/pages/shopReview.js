import React from 'react'
import { Routes , Route} from 'react-router-dom'
import { Categories } from './categories'
import Shop from './shop'

export const ShopReview = () => {
  return (
    <Routes>
        <Route index element={<Shop />} />
        <Route path=':id' element={<Categories/>} />
    </Routes>
  )
}
