import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import ProSection from "../components/ProSection";
import { dataObjOne, dataObjTwo } from "../components/AboutSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeroSection /> */}
      <AboutSection {...dataObjOne} />
      <AboutSection {...dataObjTwo} />
      <ProSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
