import { useState } from "react";
import "./App.css";
import MainPage from "./pages/Mainpage";

function App() {
  const [lists, setLists] = useState([]);

  return (
    <>
      <MainPage lists={lists} setLists={setLists} />
    </>
  );
}

export default App;
