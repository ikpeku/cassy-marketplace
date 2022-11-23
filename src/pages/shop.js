import React from 'react'
import { Link } from 'react-router-dom'
import { Shopcard } from '../components'
import { HandleCategories } from '../hooks/getContext'


const Shop = () => {

  const { categories } = HandleCategories()


  return (
    <>
      {Object.keys(categories).map((title) => (
        <div className="my-16" key={title}>
          <h1 className="text-2xl font-bold text-green-600 flex justify-start">
            <Link to={`/shop/${title}`}>
            <span
              className="cursor-pointer"
              id={title}
            >
              {title.toUpperCase()}
            </span>
            </Link>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories &&
              categories[title]
                .filter((_, index) => index < 5)

                .map((product) => (
                  <Shopcard key={product.id} product={product} />
                ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Shop;
