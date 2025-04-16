import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import "./ListTitle.css";

const ListTitle = ({ listIndex, setLists }) => {
  const [title, setTitle] = useState("");
  const [titleEditable, setTitleEditable] = useState(true);

  const submitTitle = (e) => {
    if (e.key == "Enter") {
      setTitleEditable(false);
      setLists((prevLists) => {
        const updatedLists = [...prevLists];
        updatedLists[listIndex] = { ...updatedLists[listIndex], title: title };
        return updatedLists;
      });
    }
  };

  return (
    <>
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
    </>
  );
};

export default ListTitle;
