import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiCircleQuestion, CiDeliveryTruck } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
// import payment from "../assets/payment.png";
import { featuresItems } from "@/utils/constant";
import Navbar from "@/common/Navbar";
import { CartContext } from "@/components/context/CartContextProvider";
import Afford from "@/common/Afford";
import FAQ from "@/common/FAQ";
import Footer from "@/common/Footer";

const PrivateRoutes = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext);

  const pageContent = featuresItems.find((item) => item.name == id);

  const [size, setSize] = useState("M");
  const [activeSize, setActiveSize] = useState(0);

  const sizez = ["M", "L", "XL", "XXL"];

  const [quantity, setQuantity] = useState(1);

  const [currentDate, setCurrentDate] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { month: "short", day: "numeric" };

    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const durationFun = (days) => {
      const date = new Date();
      date.setDate(date.getDate() + days);
      const options = { month: "short", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    };

    setDuration(durationFun(3));
  }, []);

  const handleCart = () => {
    addToCart(pageContent, quantity);
    // showToast("Item added", "success");
  };

  console.log(cartItems);

  return (
    <>
      <Navbar />
      <div className="flex justify-center font-poppins mb-5">
        <div className="flex flex-col sm:grid sm:grid-cols-2 p-5 lg:w-[70%] gap-10">
          <div className="flex justify-center w-full h-full">
            <img
              src={pageContent?.image}
              alt={pageContent?.name || "Product image"}
              className="max-h-[315px] sm:max-h-[500px] object-contain"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-5">
            <p className="opacity-80 text-[14px] sm:text-[16px]">
              {pageContent?.brand}
            </p>
            <h1 className="font-semibold sm:text-[25px]">
              {pageContent?.name}
            </h1>
            <p>${pageContent?.price}</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Size: <span className="font-semibold font-serif">{size}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {sizez.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveSize(i)}
                    className={`${
                      i == activeSize && "bg-black text-white"
                    } cursor-pointer rounded-[4px] h-[30px] flex items-center justify-center w-[32px] border border-gray-700 shadow-md`}
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end gap-5">
              <div className="flex flex-col gap-3">
                <p>Quantity</p>
                <div className="flex items-center gap-7 border-2 border-gray-200 w-fit rounded-sm px-3 py-[5px]">
                  <span
                    className="text-[17px] cursor-pointer"
                    onClick={() => {
                      if (quantity > 1) setQuantity((q) => q - 1);
                    }}
                  >
                    -
                  </span>
                  <span>{quantity}</span>
                  <span
                    className="text-[17px] cursor-pointer"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCart()}
                className="w-full sm:w-[50%] h-fit text-center border p-[6px] rounded-sm border-black"
              >
                Add To Cart
              </button>
            </div>
            <div className="flex gap-5 sm:gap-10 items-center flex-wrap">
              <div className="flex items-center gap-2 cursor-pointer">
                <CiCircleQuestion className="text-[20px]" />
                <span>Ask a question</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <IoShareSocialOutline className="text-[20px]" />
                <span>Share</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex font-bold gap-2 items-center">
                <CiDeliveryTruck className="text-[20px]" />
                <span>
                  Estimated Delivery:{" "}
                  <span className="font-normal">{currentDate}</span> -{" "}
                  <span className="font-normal">{duration}</span>
                </span>
              </div>
              <div className="flex font-bold gap-2 items-center">
                <BsBox2 className="text-[16px]" />
                <span>
                  Free Shipping & Returns:{" "}
                  <span className="font-normal">On all orders over</span> $150
                </span>
              </div>
            </div>
            <div className="flex flex-col shadow-xl items-center bg-[#F8F8F8] p-5 gap-3">
              {/* <img src={payment} alt="" /> */}
              <p className="font-semibold">Guarantee safe & secure checkout</p>
            </div>
          </div>
        </div>
      </div>
      <Afford />
      <FAQ />
      <Footer />
    </>
  );
};

export default PrivateRoutes;
