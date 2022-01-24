import React from "react";

import {
  EduContainer,
  EduWrapper,
  EduRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  Heading,
  MajorInfo,
  CollegeInfo,
  CourseList,
  GraduateDate,
  CourseP,
} from "./EduElements";

const EduSection = () => {
  return (
    <>
      <EduContainer id="education">
        <EduWrapper>
          <EduRow>
            <Column1>
              <ImgWrap>
                <Img src="../../images/svg-1.svg/" alt="myPhoto" />
              </ImgWrap>
            </Column1>
            <Column2>
              <Heading>EDUCATION</Heading>
              <MajorInfo>
                Computer Engineering Technology, Advanced Deploma
              </MajorInfo>
              <CollegeInfo>
                Seneca College of Applied Arts and Technology - North York,
                Ontario
              </CollegeInfo>
              <GraduateDate></GraduateDate>
              <CourseList>
                <CourseP>Cyber Security</CourseP>
                <CourseP>Python</CourseP>
                <CourseP>Wireless Communication</CourseP>
                <CourseP>Programming</CourseP>
              </CourseList>
            </Column2>
          </EduRow>
        </EduWrapper>
      </EduContainer>
    </>
  );
};

export default EduSection;
