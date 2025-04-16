import React from "react";
import "./List.css";
import ListTitle from "./ListTitle";
import ListBody from "./ListBody";

const List = ({ cards, index, setLists }) => {
  return (
    <div className="list-container">
      <ListTitle listIndex={index} setLists={setLists} />
      <ListBody listIndex={index} setLists={setLists} cards={cards} />
    </div>
  );
};

export default List;
