import React from "react";
//import { First, Second, Third } from "./Data";
import {
  ProContainer,
  ProWrapper,
  ProTitle,
  ProMenu,
  ProTab,
  ProBtn,
  ProContent,
  ProMenuH1,
  ProMenuP,
} from "./ProjectNavElements";

const obj = { 0: "First", 1: "Second", 2: "Third" };

const ProSection = (state, clickHandler) => {
  state = { activeId: 0 };
  clickHandler = (id) => {
    this.setState({ activeId: id });
  };

  return (
    <ProContainer id="Project">
      <ProTitle>PROJECTS</ProTitle>
      <ul className="tabs">
        <li onClick={() => this.clickHandler(0)}></li>
        <li onClick={() => this.clickHandler(1)}></li>
        <li onClick={() => this.clickHandler(2)}></li>
      </ul>
      <div>{obj[this.state.activeId]}</div>
    </ProContainer>
  );
};

export default ProSection;
