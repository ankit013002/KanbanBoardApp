import React, { useEffect, useState } from "react";
import "./List.css";
import Card from "./Card";
import AddCardPage from "../pages/ModifyCardPage";
import { FaPencilAlt } from "react-icons/fa";

const List = (props) => {
  const [title, setTitle] = useState("");
  const [titleEditable, setTitleEditable] = useState(true);
  const [cards, setCards] = useState([]);
  const [cardPageOpen, setCardPageOpen] = useState(false);

  const submitTitle = (e) => {
    if (e.key == "Enter") {
      setTitleEditable(false);
    }
  };

  return (
    <div className="list-container">
      <div className="list-title-container">
        {titleEditable ? (
          <div className="list-title-box">
            <input
              value={title}
              className="list-input-box"
              type="text"
              placeholder="Enter Title..."
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => submitTitle(e)}
            />
          </div>
        ) : (
          <div className="list-title-box">
            <h1 className="list-title-text">{title}</h1>
          </div>
        )}
        <div className="edit-list-button-container">
          <button
            onClick={() => setTitleEditable(true)}
            className="edit-list-button"
          >
            <FaPencilAlt />
          </button>
        </div>
      </div>

      {cards.map((item, index) => (
        <Card setCards={setCards} card={item} index={index} key={index} />
      ))}
      <button className="add-card-button" onClick={() => setCardPageOpen(true)}>
        Add Card
      </button>
      {cardPageOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <AddCardPage
              editMode={false}
              setCards={setCards}
              setCardPageOpen={setCardPageOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
