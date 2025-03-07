import React from "react";
import { BsStarFill } from "react-icons/bs";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { aboutPeople } from "@/utils/constant";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-slate-200">
      <h1 className="font-bitter font-semibold text-[50px]">About Us</h1>
      <p className="mb-3 text-center">
        At our e-commerce store, we are committed to providing high-quality,{" "}
        <br />
        energy-efficient air conditioners at competitive prices.
      </p>
      <div className="flex items-center gap-2">
        <p className="font-semibold">Ratings</p>
        <div className="flex items-center gap-2">
          <BsStarFill className="text-[17px] text-yellow-400" />
          <p className="font-bitter font-semibold">5.0</p>
        </div>
        <div className="flex">
          <AnimatedTooltip items={aboutPeople} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
