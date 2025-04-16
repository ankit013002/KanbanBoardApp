import React, { useState } from "react";
import "./ComboBox.css";

const ComboBox = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="main-container">
      <div
        className={`combobox-container${
          isExpanded
            ? " combobox-container-expanded"
            : " combobox-container-collapsed"
        }`}
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="combobox-button-container"
        >
          <div className="combobox-content">
            <p>{props.selectedOption}</p>
          </div>
        </div>

        <div
          className={`combobox-container-dropdown${
            isExpanded ? " combobox-container-dropdown-expanded" : ""
          }`}
        >
          {props.options.map((item) => (
            <button
              onClick={() => {
                props.setSelectedOption(item);
                setIsExpanded(false);
              }}
              className="combobox-selection-buttons"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComboBox;
