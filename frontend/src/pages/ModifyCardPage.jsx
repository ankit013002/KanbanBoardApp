import React, { useEffect, useState } from "react";
import "./ModifyCardPage.css";

const ModifyCardPage = (props) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardBody, setCardBody] = useState("");

  useEffect(() => {
    if (props.editMode) {
      setCardTitle(props.title);
      setCardBody(props.body);
    }
  }, [props.editMode, props.title, props.body]);

  const handleSave = () => {
    if (props.editMode) {
      props.setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[props.index] = { title: cardTitle, body: cardBody };
        return updatedCards;
      });
      props.setCardPageOpen(false);
    } else {
      props.setCards((prevCards) => {
        return [...prevCards, { title: cardTitle, body: cardBody }];
      });
      props.setCardPageOpen(false);
    }
  };

  return (
    <div className="add-card-page-container">
      <div className="add-card-header">
        <div className="add-card-title-container">
          <h1 className="add-card-header-title">Create a Card</h1>
        </div>
        <div className="add-card-exit-button-container">
          <button
            className="add-card-exit-button"
            onClick={() => props.setCardPageOpen(false)}
          >
            EXIT
          </button>
        </div>
      </div>
      <div className="add-card-content">
        <div className="content-title-section">
          <input
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            className="card-title-input"
            placeholder="Enter Card Title..."
          />
        </div>
        <div className="content-body-section">
          <textarea
            value={cardBody}
            onChange={(e) => setCardBody(e.target.value)}
            className="card-body-input"
            placeholder="Enter Card Body..."
          />
        </div>
      </div>
      <div className="add-card-footer">
        <button className="add-card-save-button" onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ModifyCardPage;
