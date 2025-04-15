import React from "react";
import "./MainPage.css";
import List from "../components/List";

const Mainpage = ({ lists, setLists }) => {
  const createNewList = () => {
    setLists((prevLists) => {
      return [
        ...prevLists,
        {
          title: "",
        },
      ];
    });
  };

  return (
    <>
      <div className="mainpage-container">
        <div className="mainpage-list-container">
          {lists.map((item, index) => (
            <List key={index} index={index} setLists={setLists} />
          ))}
        </div>
        <button className="create-button" onClick={createNewList}>
          +
        </button>
      </div>
    </>
  );
};

export default Mainpage;
