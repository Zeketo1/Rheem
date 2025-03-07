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

const Home = () => {
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
      <Banner />
      <Featured />
      <Range />
      <Popular />
      <Afford />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
