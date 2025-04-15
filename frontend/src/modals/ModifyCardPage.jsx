import React, { useState } from "react";
import "./ModifyCardPage.css";

const ModifyCardPage = (props) => {
  const [card, setCard] = useState({
    title: props.title,
    body: props.body,
  });

  const handleCardChange = (e) => {
    setCard((prevCard) => {
      return {
        ...prevCard,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="add-card-page-container">
          <div className="add-card-header">
            <div className="add-card-title-container">
              <h1 className="add-card-header-title">Create a Card</h1>
            </div>
            <div className="add-card-exit-button-container">
              <button
                className="add-card-exit-button"
                onClick={() => props.onExit()}
              >
                EXIT
              </button>
            </div>
          </div>
          <div className="add-card-content">
            <div className="content-title-section">
              <input
                name="title"
                value={card.title}
                onChange={(e) => handleCardChange(e)}
                className="card-title-input"
                placeholder="Enter Card Title..."
              />
            </div>
            <div className="content-body-section">
              <textarea
                name="body"
                value={card.body}
                onChange={(e) => handleCardChange(e)}
                className="card-body-input"
                placeholder="Enter Card Body..."
              />
            </div>
          </div>
          <div className="add-card-footer">
            <button
              className="add-card-save-button"
              onClick={() => props.onSave(card)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyCardPage;
