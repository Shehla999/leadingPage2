import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-black text-white px-6 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center  py-3 px-4 space-y-4 md:space-y-0 ">
          <div className="flex flex-col md:flex-row justify-between items-center py-3 px-4 space-y-4 md:space-x-6 md:space-y-0 md:text-left text-sm ">
            <div className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="mr-3 text-red-500" />
              <span>Call Us: 773 876 2354</span>
            </div>
            <div className="flex items-center ">
              <FaEnvelope className="mr-3 text-red-500" />
              <span>Email: support@gmail.com</span>
            </div>
          </div>
          <button className="bg-red-600 text-white rounded-full px-6 md:px-4 py-2">
            Contact Us
          </button>
        </div>
      </header>
      <nav className="bg-gray-100 text-black py-6 ">
        <div className=" mx-auto flex justify-center space-x-6 ">
          <Link to="/" className=" text-black font-bold hover:text-red-500">
            Home
          </Link>
          <Link
            to="/privacy-policy"
            className="text-black font-bold hover:text-red-500"
          >
            Privacy-Policy
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
