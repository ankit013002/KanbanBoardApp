import React, { useEffect, useState } from "react";
import "./Card.css";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import AddCardPage from "../pages/ModifyCardPage";

const Card = (props) => {
  const [cardPageOpen, setCardPageOpen] = useState(false);

  const deleteCard = () => {
    props.setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards.splice(props.index, 1);
      return updatedCards;
    });
  };

  return (
    <div className="card-container">
      <div className="card-title-container">
        <div className="card-title">{props.card.title}</div>
        <div className="card-buttons-container">
          <button onClick={() => setCardPageOpen(true)} className="card-button">
            <FaPencilAlt />
          </button>
          <button className="card-button" onClick={() => deleteCard()}>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <div className="card-body">{props.card.body}</div>
      {cardPageOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <AddCardPage
              index={props.index}
              editMode={true}
              setCards={props.setCards}
              setCardPageOpen={setCardPageOpen}
              title={props.card.title}
              body={props.card.body}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
