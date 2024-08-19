import React from "react";
import Patient1 from "../assets/images/medical-health-1.jpg";
import Patient2 from "../assets/images/medical-health-2.jpg";
const Testimonials = () => {
  const testimonials = [
    {
      image: Patient1,
      name: "Holden Caulfield",
      role: "UI DEVELOPER",
      text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    },
    {
      image: Patient2,
      name: "Holden Caulfield",
      role: "UI DEVELOPER",
      text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    },
  ];
  return (
    <div className="testimonialSection py-8 px-3 relative border-t-8 border-gray-400 ">
      <div className=" absolute inset-0 bg-black  opacity-50  text-center"></div>
      <div className="relative text-center text-white pb-16 ">
        <p className="text-white text-lg text-center ">Testimonials</p>
        <h2 className="text-white text-3xl font-bold mt-2 ">
          What Our Patients Says
          <div className="bg-red-600 rounded-full w-40 mx-auto mt-2 h-1"></div>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-12 space-y-8 md:space-y-0 lg:space-x-8  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-500 p-8 shadow-lg rounded-lg relative flex flex-col items-center text-center w-full lg:w-1/3 "
          >
            <div className="absolute -top-16 transform left-1/2-translate-y-1/2  rounded-full overflow-hidden ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 object-cover "
              />
            </div>
            <div className="mt-16 ">
              <p className="text-white "> {testimonial.text} </p>
              <h4 className="mt-6 text-lg font-semibold">
                {" "}
                {testimonial.name}{" "}
              </h4>
              <p className="text-sm"> {testimonial.role} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
