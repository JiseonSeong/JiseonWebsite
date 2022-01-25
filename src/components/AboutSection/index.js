import React from "react";

import {
  AboutContainor,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  SubTitle,
  Content,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = (
  bgColor,
  id,
  imgStart,
  heading,
  subtitle,
  content,
  img,
  alt
) => {
  return (
    <>
      <AboutContainor bgColor={bgColor} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>{heading}</Heading>
                <SubTitle>{subtitle}</SubTitle>
                <Content>{content}</Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainor>
    </>
  );
};

export default AboutSection;
