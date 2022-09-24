import React from "react";

import {
  AboutContainer,
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

const AboutSection = ({
  bgColor,
  id,
  imgStart,
  heading,
  subtitle,
  content,
  img,
  alt,
}) => {
  return (
    <>
      <AboutContainer bgColor={bgColor} id={id}>
        <Heading>{heading}</Heading>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
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
      </AboutContainer>
    </>
  );
};

export default AboutSection;
