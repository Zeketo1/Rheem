import React from "react";
import logo from "/logo-white.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 text-white bg-gray-900 h-[300px]">
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%] pl-10">
          <div className="p-4 border border-white w-fit">
            <img className="h-[80px]" src={logo} alt="logo" />
          </div>
          <p className="text-[14px] font-bitter">
            © 2025 Rheem Chiller, Inc. <br /> All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%]">
          <h1 className="text-[16px] font-semibold font-bitter">Quick Links</h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Gallery</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%]">
          <h1 className="text-[16px] font-semibold font-bitter">
            Customer Support
          </h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <p className="hover:underline cursor-pointer">FAQ</p>
            <p className="hover:underline cursor-pointer">Warranty</p>
            <p className="hover:underline cursor-pointer">Contact</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%]">
          <h1 className="text-[16px] font-semibold font-bitter">
            Connect with Us
          </h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <p className="hover:underline cursor-pointer">Facebook</p>
            <p className="hover:underline cursor-pointer">Instagram</p>
            <p className="hover:underline cursor-pointer">Twitter</p>
            <p className="hover:underline cursor-pointer">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
