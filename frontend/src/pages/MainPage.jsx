import React, { useState } from "react";
import "./MainPage.css";
import List from "../components/List";

const Mainpage = ({ lists, setLists }) => {
  const createNewList = () => {
    setLists((prevLists) => {
      return [
        ...prevLists,
        {
          title: "",
          cards: [],
        },
      ];
    });
  };

  return (
    <>
      <div className="mainpage-container">
        <div className="mainpage-kanban-header-container">Kanban Board</div>
        <div className="mainpage-kanban-body-container">
          <div className="mainpage-kanban-container">
            <div className="mainpage-kanban-scroll-area">
              <div className="kanban-container">
                {lists.map((item, index) => (
                  <List
                    key={index}
                    cards={lists[index].cards}
                    index={index}
                    setLists={setLists}
                  />
                ))}
              </div>
              <button className="create-button" onClick={createNewList}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
