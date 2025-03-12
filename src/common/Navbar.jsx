import React from "react";
import logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FiPhone } from 'react-icons/fi';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const navOptions = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Gallery', to: '/gallery' },
    { title: 'Contact', to: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (go) => {
    setIsOpen(!isOpen);
    navigate(go)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 w-full z-[999] bg-white"
    >
      <div className="flex items-center justify-between py-3 px-4 sm:px-10 lg:px-14">
        <Link to="/" className="flex items-center">
          <img className="h-[45px]" src={logo} alt="" />
          <p className="font-righteous">Rheem Chiller</p>
        </Link>

        <div className="hidden sm:flex items-center gap-10">
          {navOptions.map((item, i) => (
            <Link
              key={i}
              className="cursor-pointer hover:text-[#7985C7] transition-colors"
              to={item.to}
            >
              {item.title}
            </Link>
          ))}
          <Link to="/cart" className="bg-white p-2 rounded-full">
            <IoIosCart className="text-primary text-[18px]" />
          </Link>
        </div>

        <div className="flex sm:hidden items-center gap-4">
          <Link to="/cart" className="bg-primary p-2 rounded-full">
            <IoIosCart className="text-white text-[18px]" />
          </Link>
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <CiMenuFries className="text-2xl text-primary" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#F5E6E3] z-[998] pt-20"
          >
            <div className="absolute top-4 right-4 p-2">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-[#7985C7] transition-colors"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>

            {navOptions.map((item, i) => (
              <motion.div
                key={i}
                className="block px-8 py-4 text-center hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu(item.to);
                }}
              >
                <p>{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
