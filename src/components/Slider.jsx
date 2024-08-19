import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true }}
        // scrollbar={{ draggable: true }}
        className="relative z-0"
      >
        <SwiperSlide className="slideImg1 relative z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-red-500 text-lg md-text-2xl font-semibold mb-4 md:mb-6">
              {" "}
              The Science of Medicine. The Art of Healing.
            </h2>
            <p className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              The Science of Medicine. The Art of Healing.
            </p>
            <p className="text-white text-sm md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mt-8 px-6 py-2 bg-white rounded-full hover:bg-red-500 transition   ">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slideImg2 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-red-500 text-lg md-text-2xl font-semibold mb-4 md:mb-6">
              {" "}
              The Science of Medicine. The Art of Healing.
            </h2>
            <p className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Medical Excellence Every Day
            </p>
            <p className="text-white text-sm md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mt-8 px-6 py-2 bg-white rounded-full hover:bg-red-500 transition   ">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slideImg3 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-red-500 text-xl md-text-2xl font-semibold mb-4 md:mb-6">
              {" "}
              The Science of Medicine. The Art of Healing.
            </h2>
            <p className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Exceptional Care Close To You
            </p>
            <p className="text-white text-sm md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mt-8 px-6 py-2 bg-white rounded-full hover:bg-red-500 transition   ">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
