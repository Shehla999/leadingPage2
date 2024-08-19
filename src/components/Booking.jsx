import React from "react";

const Booking = () => {
  return (
    <div className="BookingSection  relative py-16 px-16">
      <div className="absolute inset-0 bg-black opacity-50 text-center"></div>
      <div className=" relative text-center text-white">
        <h2 className="text-5xl font-bold pb-10">Book an Appointment Today</h2>
        <p className="pb-10">
          Our health insurance plans offer comprehensive coverage for medical
          expenses, including doctor visits, hospital stays, and prescriptions,
          with affordable premiums and co-pays. We provide preventive services,
          various plan options, and excellent customer service for a stress-free
          healthcare experience.
        </p>
        <button className="bg-white text-black rounded-full py-2 px-4">
          Booking Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
