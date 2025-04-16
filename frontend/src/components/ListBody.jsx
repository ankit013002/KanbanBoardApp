import React, { useState } from "react";
import "./ListBody.css";
import Card from "./Card";
import ModifyCardPage from "../modals/CardModel";

const ListBody = ({ listIndex, setLists, cards }) => {
  const [cardPageOpen, setCardPageOpen] = useState(false);

  const createCard = (card) => {
    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      const currentList = updatedLists[listIndex];
      updatedLists[listIndex] = {
        ...currentList,
        cards: [...currentList.cards, card],
      };
      return updatedLists;
    });
    setCardPageOpen(false);
  };

  const handleDelete = (index) => {
    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      updatedLists[listIndex] = {
        ...updatedLists[listIndex],
        cards: updatedLists[listIndex].cards.filter((_, i) => i !== index),
      };
      return updatedLists;
    });
  };

  const handleListChange = (index, newListIndex) => {
    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      console.log("length: " + updatedLists.length);
      console.log("Index: " + newListIndex);
      if (newListIndex >= updatedLists.length) {
        return prevLists;
      }

      const cardToMove = updatedLists[listIndex].cards[index]; // make a copy BEFORE modifying anything

      updatedLists[listIndex] = {
        ...updatedLists[listIndex],
        cards: updatedLists[listIndex].cards.filter((_, i) => i !== index),
      };

      updatedLists[newListIndex] = {
        ...updatedLists[newListIndex],
        cards: [...updatedLists[newListIndex].cards, cardToMove],
      };

      return updatedLists;
    });
  };

  const handleEdit = (index, updatedCard) => {
    setLists((prevLists) => {
      const updatedLists = [...prevLists];
      const updatedCards = updatedLists[listIndex].cards;
      updatedCards[index] = updatedCard;
      updatedLists[listIndex] = {
        ...updatedLists[listIndex],
        cards: updatedCards,
      };
      return updatedLists;
    });
  };

  return (
    <div>
      {Array.isArray(cards) &&
        cards.map((item, index) => {
          return (
            <Card
              onDelete={() => handleDelete(index)}
              onEdit={(updatedCard) => handleEdit(index, updatedCard)}
              onListChange={(newListIndex) =>
                handleListChange(index, newListIndex)
              }
              card={item}
              key={index}
            />
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
