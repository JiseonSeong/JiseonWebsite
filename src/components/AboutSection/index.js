import React from "react";

import {
  AboutContainor,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Summary,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <>
      <AboutContainor id="about">
        <AboutWrapper>
          <AboutRow imgStart="false">
            <Column1>
              <TextWrapper>
                <Heading>ABOUT</Heading>
                <Summary>
                  Recent graduate with education in Back-end development skill
                  using C, C++, C# and Python and Embedded system with
                  Microcontrollers and Microprocessors. Dreaming on and good
                  hands-on experiences with Front-end development using
                  React.js, Javascript, HTML, CSS. Highly poised and dedicated
                  with talent in design principles and programming languages.
                </Summary>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src="../../images/svg-1.svg" alt="myPhoto" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainor>
    </>
  );
};

export default AboutSection;
