import React from "react";
import bannerImg from "../../assets/home/bannerImg.jpg";

const Banner = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <div className="absolute z-[2] top-0 left-0 bg-black opacity-30 h-full w-full " />
      <img
        className="absolute top-0 left-0 h-full w-full object-cover object-right-top"
        src={bannerImg}
        alt="banner image"
      />
      <div className="flex flex-col justify-center z-10 text-white relative h-full w-full pl-20">
        <h1 className="font-bitter font-semibold text-[54px]">
          Discover Rheem{" "}
        </h1>
        <p>Elevating Your Comfort with Premium Air Conditioning</p>
        <button className="w-fit mt-5 px-5 py-2 font-semibold text-white transition-all duration-300 bg-primary hover:bg-red-600 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
