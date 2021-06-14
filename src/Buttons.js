import React from "react";

export default function Buttons({dataArray,clickHandler}) {
  return (
    <section className="btn-container">
      {dataArray.map((option, i) => {
        return (
          <button className="categories" key={option} onClick={() => clickHandler(option)}>
            {option}
          </button>
        );
      })}
    </section>
  );
}
