import React from "react";
import air from "../assets/air-conditioning.png";

const Afford = () => {
  return (
    <div className="flex justify-between items-center relative overflow-hidden h-[400px] bg-gray-900 text-white">
      <img className="relative z-10 h- translate-y-4 w-auto" src={air} alt="" />
      <div className="absolute -left-[170px] -bottom-[250px] -rotate-45 rounded-[70px] h-[500px] w-[500px] bg-primary" />
      <div className="absolute -right-[140px] -bottom-[100px] -rotate-45 rounded-[70px] h-[600px] w-[600px] bg-primary" />
      <div className="w-[450px] pr-20">
        <h1 className="relative text-[22px] font-bitter font-semibold">
          WE MADE YOUR EVERYDAY <br /> LIFE BETTER!
        </h1>
        <p className="relative mb-5">
          On our mission to enhance everyday comfort, our platform presents the
          AirComfort Series – reliable, energy-efficient, and affordable air
          conditioning for every home and office, 24/7.
        </p>
        <button className="relative text-[14px] bg-white py-2 px-8 rounded-full text-black">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Afford;
