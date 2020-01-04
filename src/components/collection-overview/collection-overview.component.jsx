import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { CollectionsOverviewContainer } from "./collection-overview.styles.jsx";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
