import React from "react";
import { rangeItems } from "../../utils/constant";

const Range = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[22px] font-bitter font-semibold text-center">
        View Our Range Of Categories
      </h1>
      <div>
        These are the categories or air conditioning avaliblie in our store
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[94%] px-20 py-10">
          {rangeItems.map((item, i) => (
            <div
              className={`flex items-end relative shadow-lg overflow-hidden rounded-xl ${
                i === 0 ? "row-span-2 h-[500px]" : "h-[240px]"
              } ${i === 2 && "row-span-2 !h-[500px]"}`}
              key={i}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={item.image}
                alt={item.description}
              />
              <p className="absolute font-bitter rounded-bl-xl rounded-tr-lg top-0 right-0 py-3 px-5 bg-primary text-white font-semibold">
                {item.type}
              </p>
              {/* <div className="absolute top-0 left-0 h-full w-full bg-black opacity-10"/> */}
              <div className="relative w-full p-4 bg-gray-300">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Range;
