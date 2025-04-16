import React, { useState } from "react";
import "./Card.css";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import ModifyCardPage from "../modals/CardModel";
import ComboBox from "./ComboBox";

const Card = ({ onDelete, onEdit, onListChange, card }) => {
  const [cardPageOpen, setCardPageOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  return (
    <div className="card-container">
      <div className="card-title-container">
        <div className="card-title">{card.title}</div>
        <div className="card-buttons-container">
          <div className="edit-delete-buttons-container">
            <button
              onClick={() => setCardPageOpen(true)}
              className="edit-button"
            >
              <FaPencilAlt />
            </button>
            <button className="edit-button" onClick={() => onDelete()}>
              <FaRegTrashAlt />
            </button>
          </div>
          <div className="edit-list-index-button-container">
            <input
              type="text"
              className="edit-list-index-input"
              onChange={(e) => setListIndex(e.target.value)}
            />
            <button
              className="edit-list-submit-button"
              onClick={() => onListChange(listIndex)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">{card.body}</div>
      {cardPageOpen && (
        <ModifyCardPage
          title={card.title}
          body={card.body}
          onSave={(updatedCard) => {
            setCardPageOpen(false);
            onEdit(updatedCard);
          }}
        />
      )}
    </div>
  );
};

export default Card;
