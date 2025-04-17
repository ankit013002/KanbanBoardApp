import React, { useState } from "react";
import "./ListBody.css";
import Card from "./Card";
import CardModal from "../modals/CardModal";

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
      if (newListIndex >= prevLists.length)
        return prevLists;
      
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

  const handleCardIndexChange = (oldIndex, newIndex) => {
    setLists((prevLists) => {
      if(newIndex > prevLists.length)
        return prevLists
      const updateLists = [...prevLists];
      const cards = [...updateLists[listIndex].cards];
      const cardToMove = { ...cards[oldIndex]};
      const newCards = cards.filter((_, i) => i !== oldIndex)
      newCards.splice(newIndex, 0, cardToMove);
      updateLists[listIndex] = {
        ...updateLists[listIndex],
        cards: newCards,
      };
      return updateLists;
    });
  };

  return (
    <div>
      {Array.isArray(cards) &&
        cards.map((item, index) => {
          return (
            <Card
              index={index}
              onDelete={() => handleDelete(index)}
              onEdit={(updatedCard) => handleEdit(index, updatedCard)}
              onCardIndexChange={(newIndex) =>
                handleCardIndexChange(index, newIndex)
              }
              onListChange={(newListIndex) =>
                handleListChange(index, newListIndex)
              }
              card={item}
              numberOfCards={cards.length}
              key={index}
            />
          );
        })}
      <button className="add-card-button" onClick={() => setCardPageOpen(true)}>
        Add Card
      </button>
      {cardPageOpen && (
        <CardModal
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
