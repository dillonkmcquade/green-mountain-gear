import React from "react";
import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/banner.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Banner className="banner" />
      <Directory className="pa3" />
    </HomePageContainer>
  );
};
export default HomePage;
