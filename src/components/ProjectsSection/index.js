import React from "react";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ImgWrap,
  ProjectsImg,
  ProjectsH2,
  ProjectsDate,
  ProjectsP,
} from "./ProjectsElements";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      {/* <ProjectsContainer id="projects"></ProjectsContainer> */}
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ImgWrap>
            <ProjectsImg />
          </ImgWrap>
          <ProjectsH2>Education Support Application</ProjectsH2>
          <ProjectsDate>Jan 2020 - Dec 2020</ProjectsDate>
          <ProjectsP>
            Created visual design prototypes using Adobe XD and participated in
            develop solutions of web app and Android app.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
