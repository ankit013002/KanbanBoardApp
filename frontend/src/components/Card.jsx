import React, { useState } from "react";
import "./Card.css";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import ModifyCardPage from "../modals/ModifyCardPage";

const Card = ({ setCards, card, index }) => {
  const [cardPageOpen, setCardPageOpen] = useState(false);

  const deleteCard = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards.splice(index, 1);
      return updatedCards;
    });
  };

  const editCard = (card) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index] = card;
      return updatedCards;
    });
    setCardPageOpen(false);
  };

  return (
    <div className="card-container">
      <div className="card-title-container">
        <div className="card-title">{card.title}</div>
        <div className="card-buttons-container">
          <button onClick={() => setCardPageOpen(true)} className="card-button">
            <FaPencilAlt />
          </button>
          <button className="card-button" onClick={() => deleteCard()}>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <div className="card-body">{card.body}</div>
      {cardPageOpen && (
        <ModifyCardPage
          title={card.title}
          body={card.body}
          onExit={() => setCardPageOpen(false)}
          onSave={editCard}
        />
      )}
    </div>
  );
};

export default Card;
