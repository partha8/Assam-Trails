import "./styles.css";
import React, { useState } from "react";
import dataBase from "./data.js";

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
      <section className="btn-container">
        {dataArray.map((option, i) => {
          return (
            <button key={option} onClick={() => clickHandler(option)}>
              {option}
            </button>
          );
        })}
      </section>
      <div className="outer-container">
        {dataBase[selectedOption].map((item, i) => {
          return (
            <div key={item.name} className="container">
              <h2> {item.name} </h2>
              <p className="location">
                {" "}
                <strong>Location</strong>: {item.location}{" "}
              </p>
              <img src={item.img} alt={item.name} />
              <p className="desc"> {item.desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
