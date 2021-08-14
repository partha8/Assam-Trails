import React, { useState } from "react";
import dataBase from "./data";

export default function Items({ selectedOption }) {

  return (
    <div className="outer-container">
      {dataBase[selectedOption].map((item, i) => {
        return (
          <div key={item.name} className="container">
            <h2> {item.name} </h2>
            <p className="location">
              {" "}
              <strong>Location</strong>: {item.location}{" "}
            </p>
            <p style={{fontWeight:'700'}} > Rating: {item.rating} </p>
            <img src={item.img} alt={item.name} />
            <p className="desc">
              {" "}
              { item.desc }
            </p>
          </div>
        );
      })}
    </div>
  );
}
//item.desc
