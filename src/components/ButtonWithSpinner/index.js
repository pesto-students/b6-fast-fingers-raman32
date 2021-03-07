import React from "react";
import "./index.css";
import Spinner from "../Spinner";

function ButtonWithSpinner({ onClick, showSpinner, color="rgb(27, 175, 8)", children }) {
  return (
    <button className="ButtonWithSpinner" style={{backgroundColor:color}} onClick={onClick}>
      {showSpinner ? <Spinner size="30px" show={showSpinner} /> : null}{" "}
      {children}{" "}
    </button>
  );
}

export default ButtonWithSpinner;
