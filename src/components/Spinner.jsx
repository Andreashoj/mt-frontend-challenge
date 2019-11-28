import React from "react";
import "../styles/spinner.css";

const Spinner = ({ spinner }) => {
  if (!spinner) {
    return null;
  } else {
    return (
      <div className="spinner-container">
        <div className="spinner-loading"></div>
      </div>
    );
  }
};

export default Spinner;
