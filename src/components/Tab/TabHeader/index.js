import React from "react";
import "./index.css";
function TabHeader({ isSelected, setSelected, ...props }) {
  return (
    <div
      className={isSelected ? "tabHeader selected" : "tabHeader"}
      onClick={setSelected}
    >
      {props.children}
    </div>
  );
}

export default TabHeader;
