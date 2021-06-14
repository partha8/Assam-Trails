import React, { useState } from "react";
import dataBase from "./data";

export default function Items({ selectedOption }) {
  const [readMore, setReadMore] = useState(false);

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
            <img src={item.img} alt={item.name} />
            <p className="desc">
              {" "}
              {readMore ? item.desc : `${item.desc.substring(0, 200)}...`}
              <button
                className="readmore-btn"
                onClick={() => setReadMore(!readMore)}
              >
                {" "}
                {!readMore ? "Read More" : "Show less"}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
//item.desc
