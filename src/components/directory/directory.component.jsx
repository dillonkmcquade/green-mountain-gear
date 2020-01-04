import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps)(Directory);
