import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [lists, setLists] = useState([]);

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
      <div className="app-container">
        <div className="app-list-container">
          {lists.map((item, index) => (
            <List key={index} />
          ))}
        </div>
        <button className="create-button" onClick={createNewList}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
