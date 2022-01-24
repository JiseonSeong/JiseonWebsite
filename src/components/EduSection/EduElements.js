import styled from "styled-components";

export const EduContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const EduWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const EduRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1` : `'col1 col2`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  } ;
`;

export const MajorInfo = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: black;
`;

export const CollegeInfo = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 24px;
  color: black;
`;

export const Course = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: right;
`;

export const GraduateDate = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
  font-style: italic;
  line-height: 24px;
  color: black;
`;

export const CourseList = styled.li`
  display: flex;
`;

export const CourseP = styled.p`
  color: black;
  display: flex;
  text-decoration: none;
  height: 100%;
`;
