import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import { FaAmbulance, FaHeart, FaPhoneAlt } from "react-icons/fa";
import Counter from "./Counter";
import Experts from "./Experts";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Booking from "./Booking";
const Home = () => {
  return (
    <div>
      <Header />
      <Slider />

      <div className="w-[90vw]  mx-auto   z-10 ">
        <div className="flex  md:flex-row w-[90vw] mx-auto -mt-7 items-center absolute  ">
          <div className="flex-1 bg-white text-black  flex items-center justify-center py-4 md:py-6 px-4 md:px-6 text-center">
            {/* <FaPhoneAlt className="mr-2 md:mr-3" /> */}
            <FaPhoneAlt className="mr-2 md:mr-3" /> Nutritional Counseling
          </div>

          <div className="flex-1 bg-red-500 text-white  flex items-center justify-center py-4 md:py-6 px-4 md:px-6 text-center text-sm md:text-lg ">
            <FaHeart className="mr-2 md:mr-3 text-white" /> Mental Health Care
          </div>
          <div className="flex-1 bg-white text-black  flex items-center justify-center py-4 md:py-6 px-4 md:px-6 text-center">
            <FaAmbulance className="mr-2 md:mr-3 " />
            Immediate Emergency Services
          </div>
        </div>
      </div>

      <Counter className="z-0 " />
      <Experts />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
};

export default Home;
