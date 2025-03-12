import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Values = () => {
  const values = [
    {
      title: "Quality & Reliability",
      desc: "We provide top-tier air conditioning solutions that ensure long-lasting performance, efficiency, and customer satisfaction.",
    },
    {
      title: "Customer-Centric Approach",
      desc: "Our customers are at the heart of everything we do. We prioritize their needs by offering exceptional service, support, and hassle-free shopping.",
    },
    {
      title: "Innovation & Technology",
      desc: "We embrace the latest advancements in air conditioning technology to deliver smart, energy-efficient, and eco-friendly solutions.",
    },
    {
      title: "Trust & Transparency",
      desc: "We build long-term relationships through honesty, clear policies, and a seamless purchasing experience.",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="warranty">
      <h1 className="text-[22px] text-center font-bitter font-semibold">
        Core Values
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-20 py-10">
        {values.map((item, i) => (
          <div className="bg-slate-200 w-full p-4 rounded-lg" key={i}>
            <h1 className="text-[15px] mb-3 font-bitter font-semibold text-center">
              {item.title}
            </h1>
            <p className="text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center w-full">
        <h1 className="mb-4 text-[22px] text-center font-bitter font-semibold">
          Warranty & Peace of Mind
        </h1>
        <p className="px-5 sm:px-10 md:px-20 lg:px-0 lg:w-[50%]">
          We stand by the quality of our air conditioners with
          manufacturer-backed warranties for your peace of mind. Each product
          comes with a specified warranty period, ensuring protection against
          defects and performance issues. Our commitment to reliability means
          you can shop with confidence, knowing that your comfort is secured.
        </p>
      </div>
    </div>
  );
};

export default Values;
