import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../../components/collection/collection.component";
import { ShopContainer } from "./shop.styles";

const ShopPage = ({ match }) => {
  return (
    <ShopContainer>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopContainer>
  );
};

export default ShopPage;
