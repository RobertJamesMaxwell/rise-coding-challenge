import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = () => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <section
      className={`card ${isFlipped ? "isFlipped" : ""}`}
      onClick={() => {
        console.log("isFlipped: ", isFlipped);
        return setFlipped(!isFlipped);
      }}
    >
      <div className={`front ${isFlipped ? "no-display" : ""}`}>
        Front of card
      </div>
      <div className={`back ${isFlipped ? "" : "no-display"}`}>
        Back of cardfasfasfdsaf dfasdfasdf asdfa sfas fas f
      </div>
    </section>
  );
};

export default Flashcard;
