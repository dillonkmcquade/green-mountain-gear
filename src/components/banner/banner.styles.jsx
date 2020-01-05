import styled from "styled-components";
import bannerPhoto from "../../assets/stowe-mountain-pic.jpg";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-image: url(${bannerPhoto});
  width: 100%;
  height: 600px;
  @media screen and (max-width: 800px) {
    height: 450px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px black;
  color: white;
  font-size: 48px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
    padding: 20px;
  }
`;
