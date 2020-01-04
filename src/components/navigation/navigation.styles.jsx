import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: block;
  min-height: 50px;
  padding-top: 15px;
  padding-left: 40px;
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    padding-left: 5px;
  }
  @media screen and (max-width: 409px) {
    font-size: 20px;
  }
`;
export const TitleContainer = styled(Link)`
  font-family: "Amatic SC", cursive;
  text-shadow: 1px 1px 1px black;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const ButtonsContainer = styled.div`
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  display: flex;
  @media screen and (max-width: 409px) {
    width: 80%;
  }
`;
