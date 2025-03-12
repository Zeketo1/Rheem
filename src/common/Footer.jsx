import React from "react";
import logo from "/logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-0 justify-items-center text-white bg-gray-900 h-fit pb-10 md:pb-0 md:h-[300px]">
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
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="hover:underline cursor-pointer">
              About Us
            </Link>
            <Link to="/gallery" className="hover:underline cursor-pointer">
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%]">
          <h1 className="text-[16px] font-semibold font-bitter">
            Customer Support
          </h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <Link to="/#faq" className="hover:underline cursor-pointer">
              FAQ
            </Link>
            <Link
              to="/about/#warranty"
              className="hover:underline cursor-pointer"
            >
              Warranty
            </Link>
            <Link to="/contact" className="hover:underline cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 h-[60%]">
          <h1 className="text-[16px] font-semibold font-bitter">
            Connect with Us
          </h1>
          <div className="flex flex-col gap-2 text-[14px]">
            <Link to="" className="hover:underline cursor-pointer">
              Facebook
            </Link>
            <Link to="" className="hover:underline cursor-pointer">
              Instagram
            </Link>
            <Link to="" className="hover:underline cursor-pointer">
              Twitter
            </Link>
            <Link to="" className="hover:underline cursor-pointer">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
