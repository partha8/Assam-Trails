import "./styles.css";
import React, { useState } from "react";
import dataBase from "./data.js";
import Buttons from './Buttons';
import Items from './Items'

//minor change
export default function App() {
  const dataArray = Object.keys(dataBase);
  const [selectedOption, setSelectedOption] = useState("Wildlife");
  function clickHandler(item) {
    var newItem = item;
    setSelectedOption(newItem);
  }
  return (
    <div className="App">
      <header>
        <h1> Assam trails </h1>
        <h2>We will help you decide which places to visit in Assam!</h2>
      </header>
      <Buttons dataArray={dataArray} clickHandler={clickHandler}/>
      <Items selectedOption={selectedOption}/>
    </div>
  );
}
