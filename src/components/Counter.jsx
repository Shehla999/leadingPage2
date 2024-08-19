import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { MdGppGood } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";

const Counter = () => {
  return (
    <div className="counter1 py-24 z-0 mt-5 xl:h-96">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white h-64">
        <div className="flex flex-col items-center">
          <IoIosHappy className="text-7xl text-red-500 mb-4" />
          <h3 className="text-4xl font-bold">7953</h3>
          <p className="text-lg">Happy Customers</p>
        </div>

        <div className="flex flex-col items-center">
          <MdGppGood className="text-7xl text-red-500 mb-4" />

          <h3 className="text-4xl font-bold">7953</h3>
          <p className="text-lg">Finished Projects</p>
        </div>

        <div className="flex flex-col items-center">
          <RiCupFill className="text-7xl text-red-500 mb-4" />
          <h3 className="text-4xl font-bold">350</h3>
          <p className="text-lg">Cups of Coffee</p>
        </div>

        <div className="flex flex-col items-center">
          <FaCalendarAlt className="text-7xl text-red-500 mb-4" />
          <h3 className="text-4xl font-bold">574</h3>
          <p className="text-lg">Working Days</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
