import React, { useEffect, useState } from "react";
import AirConditionerLoader from "../utils/AirConditionerLoader";
import Banner from "../components/about/Banner";
import Navbar from "../common/Navbar";
import MissionVision from "@/components/about/MissionVision";
import FAQ from "@/common/FAQ";
import Footer from "@/common/Footer";
import Values from "@/components/about/Values";

const About = () => {
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
      <MissionVision />
      <Values />
      <FAQ />
      <Footer />
    </div>
  );
};

export default About;
