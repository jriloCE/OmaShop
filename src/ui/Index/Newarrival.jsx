import React from 'react';
import { newarrival } from '../../../Resources/Newarrival';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Newarrival() {
  return (
    <div>
      {/* Title Section */}
      <div className="flex flex-col gap-2 mt-8">
        <h1 className="text-3xl font-bold">New Arrival</h1>
        <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
      </div>

      {/* Responsive Swiper Slider */}
      <div className="mt-6">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2900,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {newarrival.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded shadow-sm bg-white">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full lg:w-60 object-contain mb-4"
                />
                <p className="mt-3 text-center text-gray-600 line-clamp-2">{item.description}</p>
                <p className="mt-3 text-xl font-bold text-black-600">₦ {item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Newarrival;
