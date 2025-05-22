import React from 'react'
import { featuredproducts } from '../../../Resources/FeaturedProducts'

function FeaturedProducts() {
  return (
    <div > 

          <div className="flex gap-2  flex-col mt-10">
              <h1 className="text-3xl font-bold">Featured Product</h1>
              <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
          </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:mt-6 lg:grid-cols-5 gap-10 lg:place-items-center'>
          {featuredproducts.map((item)=>(
           <div
               key={item.id}
               className="border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm bg-white"
             >  
                 <img
                   src={item.image}
                   alt={item.description}
                   className="w-full lg:w-60 object-contain mb-4" 
                 />
              
                 <p className="text-gray-600 text-center mt-3">{item.description}</p>
                 <p className="text-xl font-bold text-black-600 mt-3">${item.price}</p>
             </div>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts