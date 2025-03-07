import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import Navbar from "../common/Navbar";
import AirConditionerLoader from "../utils/AirConditionerLoader";
import Featured from "../components/home/Featured";
import Range from "../components/home/Range";
import Popular from "../components/home/Popular";
import Afford from "../common/Afford";
import FAQ from "../common/FAQ";
import Footer from "../common/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 3500);
  }, [active]);

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
    <div>
      {active && <AirConditionerLoader />}
      <Navbar />
      <Banner />
      <Featured />
      <Range />
      <Popular />
      <Afford />
      <div id="faq" />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
