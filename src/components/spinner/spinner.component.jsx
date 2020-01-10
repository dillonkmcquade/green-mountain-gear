import "./spinner.styles.scss";
import React from "react";

const Spinner = WrappedComponent => {
  const withSpinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return withSpinner;
};

export default Spinner;
