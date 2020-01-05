import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  height: 50px
  font-size: 12px;
  font-family: styrene B;
  color: gray;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const LinkContainer = styled.a`
  color: gray;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        © 2020 Green Mountain Gear |{" "}
        <LinkContainer href="https://www.github.com/dillonkmcquade">
          Site by Dillon McQuade
        </LinkContainer>
      </span>
    </FooterContainer>
  );
};

export default Footer;
