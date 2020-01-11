import React, { lazy, Suspense } from "react";
import { HomePageContainer } from "./homepage.styles";
import LazySpinner from "../../components/lazySpinner/lazy-spinner.component";

const Banner = lazy(() => import("../../components/banner/banner.component"));
const Directory = lazy(() =>
  import("../../components/directory/directory.component")
);
const HomePage = () => {
  return (
    <HomePageContainer>
      <Suspense fallback={<LazySpinner />}>
        <Banner className="banner" />
        <Directory className="pa3" />
      </Suspense>
    </HomePageContainer>
  );
};
export default HomePage;
