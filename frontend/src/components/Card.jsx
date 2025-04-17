import React, { useEffect, useState } from "react";
import "./Card.css";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import CardModal from "../modals/CardModal";
import ComboBox from "./ComboBox";

const Card = ({ index, onDelete, onEdit, onCardIndexChange, onListChange, card  }) => {
  const [cardPageOpen, setCardPageOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    setCardIndex(index);
  }, [card, index]);

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
          <div className="edit-list-index-button-container">
            <input
              value={cardIndex}
              type="text"
              className="edit-list-index-input"
              onChange={(e) => setCardIndex(e.target.value)}
            />
            <button
              className="edit-list-submit-button"
              onClick={() => onCardIndexChange(cardIndex)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">{card.body}</div>
      {cardPageOpen && (
        <CardModal
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
