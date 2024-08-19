import React from "react";
import Team1 from "../assets/images/team-1.jpg";
import Team3 from "../assets/images/team-3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const experts = [
  {
    name: "Martin Cousis",
    role: "Developer",
    image: Team1,
    social: {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Designer",
    image: Team3,
    social: {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];
const Experts = () => {
  return (
    <div className="container mx-auto py-12 ">
      <div className="text-center justify-center">
        <p className="text-xl">Team</p>
        <h2 className="text-3xl font-bold mb-3">Meet Our Experts</h2>
        <div className="flex justify-center">
          <div className="w-32 h-1 rounded bg-red-500 mb-8"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white shadow-lg  ">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full object-cover"
            />

            <div className=" bg-white flex space-x-4 items-center justify-center ">
              <a
                href={expert.social.facebook}
                className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  text-gray-800 hover:text-white hover:bg-red-500  text-lg flex space-x-4 items-center justify-center bg-white p-4"
              >
                <FaFacebook className="text-2xl" />
              </a>

              <a
                href={expert.social.instagram}
                className=" left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  text-gray-800 hover:text-white hover:bg-red-500  text-lg flex space-x-4 items-center justify-center bg-white p-4"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={expert.social.linkedin}
                className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  text-gray-800 hover:text-white hover:bg-red-500 text-lg flex space-x-4 items-center justify-center bg-white p-4"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <div className="p-5 text-center ">
              <h3 className="text-2xl font-semibold"> {expert.name} </h3>
              <p className="text-xl"> {expert.role} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
