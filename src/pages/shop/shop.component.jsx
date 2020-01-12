import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { ShopContainer } from "./shop.styles";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPagewithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  
  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  };


  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPagewithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </ShopContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
