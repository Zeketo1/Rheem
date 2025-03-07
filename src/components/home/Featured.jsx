import React from "react";
import { featuresItems } from "../../utils/constant";

const Featured = () => {
  const featuresItemsFlitted = featuresItems.slice(0, 4);
  return (
    <div className="my-10">
      <h1 className="ml-20 text-[22px] font-bitter font-semibold">
        Featured Products
      </h1>
      <div className="grid grid-cols-4 gap-[20px] p-10">
        {featuresItemsFlitted.map(({ name, image, description, price }, i) => (
          <div
            className="relative flex gap-4 flex-col bg-white shadow-lg rounded-lg p-3"
            key={i}
          >
            <img
              className="object-contain h-[200px] w-full"
              src={image}
              alt={image}
            />
            <div>
              <p className="text-[15px] font-semibold font-bitter">{name}</p>
            </div>
            <p className="text-[14px]">{description}</p>
            <p className="absolute font-bitter rounded-bl-xl rounded-tr-lg top-0 right-0 py-3 px-5 bg-primary text-white font-semibold">
              ${price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
