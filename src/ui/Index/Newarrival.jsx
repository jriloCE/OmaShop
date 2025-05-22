import React from 'react';
import { newarrival } from '../../../Resources/newarrival';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Newarrival() {
  return (
    <div>
      {/* Title Section */}
      <div className="flex gap-2 flex-col mt-10">
        <h1 className="text-3xl font-bold">New Arrival</h1>
        <div className="h-[3px] w-[100px] rounded bg-[#FF496C]"></div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10"
      >
        {newarrival.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm bg-white">
              <img
                src={item.image}
                alt={item.description}
                className="w-full lg:w-60 object-contain mb-4"
              />
              <p className="text-gray-600 text-center mt-3">{item.description}</p>
              <p className="text-xl font-bold text-gray-800 mt-2">${item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Newarrival;