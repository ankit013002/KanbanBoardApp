import React, { useState } from 'react'
import "./MenuSelection.css"

const MenuSelection = ({selectedItem, setSelectedItem, options}) => {

  const [expand, setExpand] = useState(false)

  return (
    <div className={`menu-selection-container ${expand ? "menu-selection-container-expanded" : ""}`}>
      <div className={`selected-item-container ${expand ? "selected-item-container-expanded" : ""}`}>
          <button aria-label="Toggle menu" aria-expanded={expand} onClick={() => {setExpand(!expand)}} className="selected-item-button">{selectedItem}</button>
      </div>
      {expand &&
        <div className="menu-selection-options-container">
          {options.map((item, index) => (
            <div key={index} className="menu-selection-options-button-container">
              <button className="menu-selection-options-button" onClick={() => {setExpand(false); setSelectedItem(item)}}>{item}</button> 
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default MenuSelection