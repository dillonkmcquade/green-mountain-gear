import React from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import { BannerContainer, TitleContainer } from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <TitleContainer>
        <span>GET GEARED UP FOR YOUR NEXT ADVENTURE</span>
        <Link to="/shop">
          <Button bannerlogo="true">SHOP NOW</Button>
        </Link>
      </TitleContainer>
    </BannerContainer>
  );
};

export default Banner;
