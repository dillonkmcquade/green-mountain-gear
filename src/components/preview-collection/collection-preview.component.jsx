import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName, match }) => {
  return (
    <div className="collection-preview">
      <Link className="title" to={`${match.url}/${routeName}`}>
        <h1 className="title">{title}</h1>
      </Link>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
