import styled from "styled-components";

export const ProContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #def6ff;
`;

export const ProTitle = styled.h1`
  font-size: 2rem;
  color: #1f1f1f;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
`;

export const ProMenu = styled.ul`
  list-style: none;
  text-align: center;
  align-items: center;
`;

export const ProTab = styled.li`
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 140px;
  height: 300px;
`;

export const ProBtn = styled.button`
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    background: yellow;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const ProContent = styled.p`
  float: left;
  padding: 25px 25px;
  text-align: start;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  /* height: 300px; */
`;

export const ProMenuH1 = styled.h2`
  color: #1f1f1f;
  max-width: 440px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const ProMenuP = styled.p`
  color: #1f1f1f;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
`;
