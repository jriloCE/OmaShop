import React from 'react'
import { topsales } from '../../../Resources/Topsales'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


function Topsales() {
  return (
    <div >

                  {/* Title Section */}
                 <div className="flex gap-2 flex-col mt-8">
                   <h1 className="text-3xl font-bold"> Top Sales</h1>
                   <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
                 </div>
           
                 {/* Product Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:mt-2 lg:grid-cols-5 gap-10 lg:place-items-center">
                   {/* {topsales.map((item) => (
                     <div
                       key={item.id}
                       className="max-w-lgs w-full lg:h-92 lg:w-55 border border-gray-200 lg:gap-0 flex flex-col items-center"
                     >
                       <img
                         src={item.image}
                         alt={item.description}
                         className="w-full lg:w-60 object-contain mb-4"
                       />
                       <p className="text-gray-600 text-center mt-3">{item.description}</p>
                       <p className="text-xl font-bold text-black-600 mt-3">${item.price}</p>
                     </div>
                   ))} */}
                 </div>

                    <Swiper
                         slidesPerView={5}
                         spaceBetween={30}
                         // pagination={{
                         //   clickable: true,
                         // }}
                         loop={true}
                         autoplay={{
                           delay: 3000,
                           disableOnInteraction: false,
                         }}
                         modules={[Pagination,Autoplay]}
                         className="mySwiper"
                       >
                         
                         {topsales.map((item) => (
                            <SwiperSlide key={item.id}>
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
                        </SwiperSlide>
                 
                         ))}
                 
                       </Swiper>

    </div>
  )
}

export default Topsales