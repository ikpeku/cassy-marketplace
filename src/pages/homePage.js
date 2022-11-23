import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

const navigate = useNavigate()

  // console.log("my collections" ,categories);

    const components = [
        
            {
              "id": 1,
              "title": "hats",
              "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
            },
            {
              "id": 2,
              "title": "jackets",
              "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
            },
            {
              "id": 3,
              "title": "sneakers",
              "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
            },
            {
              "id": 4,
              "title": "womens",
              "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
            },
            {
              "id": 5,
              "title": "mens",
              "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
            }
          
    ]

    const handleNavigation = (title) => {
      navigate(`/shop/${title}`)

    }

  return (
    <div className='space-y-3 md:space-y-0 md:flex justify-center grow flex-wrap gap-3'>
      {components.map(({id, title, imageUrl}) => (
        <div key={id} className=" grow md:w-1/4">
            <div className='h-96 relative bg-cover bg-no-repeat' style={{backgroundImage: `url(${imageUrl};)`}}>         
                <div onClick={() => handleNavigation(title)} className='absolute inset-x-0 bottom-5 h-16 w-1/2 xl:w-1/4 text-center text-[#fff] bg-gray-500 mx-auto cursor-pointer hover:scale-x-105'>
                    <h2 className='font-bold text-2xl text-gray-400'>{title}</h2>
                    <p className=''>Shop Now</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}
