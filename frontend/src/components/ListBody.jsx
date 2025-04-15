import React, { useState } from "react";
import "./ListBody.css";
import Card from "./Card";
import ModifyCardPage from "../modals/ModifyCardPage";

const ListBody = () => {
  const [cards, setCards] = useState([]);
  const [cardPageOpen, setCardPageOpen] = useState(false);

  const createCard = (card) => {
    setCards((prevCards) => {
      return [...prevCards, card];
    });
    setCardPageOpen(false);
  };

  return (
    <div>
      {cards.map((item, index) => {
        return (
          <Card setCards={setCards} card={item} index={index} key={index} />
        );
      })}
      <button className="add-card-button" onClick={() => setCardPageOpen(true)}>
        Add Card
      </button>
      {cardPageOpen && (
        <ModifyCardPage
          title=""
          body=""
          onExit={() => setCardPageOpen(false)}
          onSave={createCard}
        />
      )}
    </div>
  );
};

export default ListBody;
