import Afford from "@/common/Afford";
import FAQ from "@/common/FAQ";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import Products from "@/components/gallery/Products";
import AirConditionerLoader from "@/utils/AirConditionerLoader";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 3500);
  }, [active]);
  return (
    <div>
      {active && <AirConditionerLoader />}
      <Navbar />
      <Products />
      <Afford />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Gallery;
