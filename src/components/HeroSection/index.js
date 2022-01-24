import React from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hero Header1</HeroH1>
        <HeroP>Hero Page</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
