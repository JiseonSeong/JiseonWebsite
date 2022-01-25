import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SplitLine,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SplitLine />
          <SocialMediaWrap>
            <SocialMedia>
              <SocialLogo to="/" onClick={toggleHome}>
                Jiseon Seong
              </SocialLogo>
              <WebsiteRights>
                Raina Jiseon Seong © {new Date().getFullYear()}All rights
                reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://linkedin.com/in/raina-seong-62a3b91a0"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/JiseonSeong"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMedia>
          </SocialMediaWrap>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
