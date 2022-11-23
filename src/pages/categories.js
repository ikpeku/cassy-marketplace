import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Shopcard } from '../components'
import { HandleCategories } from '../hooks/getContext'

export const Categories = () => {
    const {id} = useParams()
    const { categories } = HandleCategories()
    const [products, setProducts] = useState(categories[id])

    useEffect(() => {
        setProducts(categories[id])

    }, [categories, id])

    
  return (
    <div>
     <h1 className="text-2xl font-bold text-green-600 flex justify-start">{id.toUpperCase()}</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products && products.map((product) => (
                  <Shopcard key={product.id} product={product} />
                ))}
          </div>
    </div>
  )
}
