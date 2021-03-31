import React, { useState } from "react";
import TabBody from "./TabBody";
import TabHeader from "./TabHeader";
import "./index.css";
function Tab({ components }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="tabContainer">
      <div className="tabHeaderContainer">
        {components.map((ele, index) => (
          <TabHeader
            key={index}
            isSelected={index === selected}
            setSelected={() => setSelected(index)}
          >
            {ele.heading}
          </TabHeader>
        ))}
      </div>
          <TabBody>{components[selected].body}</TabBody>
      </div>
  );
}

export default Tab;
