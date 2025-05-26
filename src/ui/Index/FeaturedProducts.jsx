import React from 'react';
import { featuredproducts } from '../../../Resources/FeaturedProducts';
import { FreeShippingOrder } from '../../../Resources/FeaturedProducts';

import { IoCallOutline } from "react-icons/io5";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { FaRecycle } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

function FeaturedProducts() {
  // Icon map to dynamically render icons based on string keys
  const iconMap = {
    LiaTruckMovingSolid: LiaTruckMovingSolid,
    IoCallOutline: IoCallOutline,
    FaRecycle: FaRecycle,
    FaMoneyCheckDollar: FaMoneyCheckDollar ,
  };

  return (
    <div>
      {/* Title Section */}
      <div className="flex gap-2 flex-col mt-10">
        <h1 className="text-3xl font-bold">Featured Product</h1>
        <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-6 lg:grid-cols-5 gap-7 lg:place-items-center">
        {featuredproducts.map((item) => (
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

      {/* <img src="https://htmlbeans.com/html/botanical/images/hbdr.png" className='h-[30px]'/> */}



      {/* Free Shipping / Services Grid */}
      <div className="lg:mt-15 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:ml-50 mt-10">
        {FreeShippingOrder.map((item) => {
          const IconComponent = iconMap[item.icon]; // Get corresponding icon
          return (
            <div
              key={item.id}
              className="border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm bg-white"
            >
              <span className="text-3xl text-[#FF496C] mb-2">
                {IconComponent && <IconComponent />}
              </span>
              <p className="text-xl text-center font-bold text-black-600 mt-3">{item.text}</p>
              <strong className="text-gray-600 text-center mt-3">{item.description}</strong>
            </div>
          );
        })}
      </div>


                           {/* Yusuf Hassan - CEO */}
                <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
                    <p className="text-gray-600 text-base md:text-lg lg:text-2xl  leading-relaxed">
                      We ship healthy potted plants right to your doorstep. <br />
                      Each plant comes with simple care instructions from <br />
                      our plant experts.
                    </p>

                    <img
                      src="https://htmlbeans.com/html/botanical/images/signature.png"
                      className="h-14 w-30 mt-6"
                      loading="lazy"
                    />

                    <p className="text-gray-600 mt-4 text-sm md:text-base">
                      <strong>Yusuf Hassan – CEO</strong>
                    </p>
              </div>


    </div>
  );
}

export default FeaturedProducts;
