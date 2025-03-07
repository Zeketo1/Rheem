import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="sticky z-[90] top-0 left-0 flex items-center justify-between py-4 px-6 bg-primary text-white">
      <div className="flex items-center">
        <img className="h-[50px]" src={logo} alt="" />
        <p className="font-righteous">Rheem Chiller</p>
      </div>
      <div className="flex items-center gap-7 text-[15px]">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <button className="bg-white rounded-md text-gray-900 py-2 px-4">
          Contact Us
        </button>
        <Link to="/cart" className="bg-white p-2 rounded-full">
          <IoIosCart className="text-primary text-[18px]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
