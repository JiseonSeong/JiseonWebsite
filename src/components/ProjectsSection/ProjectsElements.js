import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #def6ff;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2rem;
  color: #1f1f1f;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 240px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-ease-out;
    cursor: pointer;
  }
`;

export const ImgWrap = styled.div`
  max-width: 250px;
  height: 100%;
`;

export const ProjectsImg = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 2px;
`;

export const ProjectsDate = styled.p`
  font-size: 0.7rem;
  margin-bottom: 10px;
  text-align: center;
  font-style: italic;
`;

export const ProjectsP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
