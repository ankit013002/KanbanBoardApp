import React from "react";
import "./List.css";
import ListTitle from "./ListTitle";
import ListBody from "./ListBody";

const List = ({ index, setLists }) => {
  return (
    <div className="list-container">
      <ListTitle listIndex={index} setLists={setLists} />
      <ListBody />
    </div>
  );
};

export default List;
