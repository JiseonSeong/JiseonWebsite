import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: white;
`;

export const FooterWrap = styled.div`
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SplitLine = styled.line`
  border-top: 1px solid #87b5ff;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const SocialMediaWrap = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #525252;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #525252;
  margin-bottom: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55px;
`;

export const SocialIconLink = styled.a`
  color: #525252;
  font-size: 20px;
`;
