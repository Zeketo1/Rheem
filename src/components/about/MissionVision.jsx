import React from "react";
import mission1 from "../../assets/about/mission1.jpg";
import mission2 from "../../assets/about/mission2.jpg";
import vision from "../../assets/about/vision.jpg";

const MissionVision = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[400px] px-20 py-10">
        <div className="hidden lg:flex h-full">
          <img
            className="h-[200px] w-[200px] object-cover rounded-lg"
            src={mission1}
            alt=""
          />
          <div className="h-full flex items-end">
            <img
              className="flex-end h-[250px] w-[200px] object-cover rounded-lg shadow-lg z-10 -translate-x-10"
              src={mission2}
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="font-bitter text-[14px] font-semibold">-OUR MISSION</p>
          <p className="mb-2 text-[30px] lg:text-[38px] font-semibold">
            Cooling Every Space, Comforting Every Home
          </p>
          <p className="text-[14px]">
            We strive to provide high-quality, energy-efficient air conditioning
            solutions that enhance comfort and affordability. Our mission is to
            make cooling accessible to every home and business with seamless
            service, reliable products, and customer-focused support.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[400px] px-20 py-10">
        <div>
          <p className="font-bitter text-[14px] font-semibold">-OUR VISION</p>
          <p className="mb-2 text-[30px] lg:text-[38px] font-semibold">
            A Future of Smart & Sustainable Cooling
          </p>
          <p className="text-[14px]">
            We envision a world where advanced, eco-friendly air conditioning is <br />
            available to all. By embracing innovation and sustainability, we aim <br />
            to revolutionize the way people experience comfort,  <br />
            efficiency, affordability, and long-term value.
          </p>
        </div>
        <div className="hidden lg:flex justify-center h-full">
          <img
            className="h-[300px] w-[80%] object-top object-cover rounded-lg"
            src={vision}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
