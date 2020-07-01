import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = () => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <section
      className={`flashcard-container ${isFlipped ? "isFlipped" : ""}`}
      onClick={() => {
        console.log("isFlipped: ", isFlipped);
        return setFlipped(!isFlipped);
      }}
    >
      <div className='flashcard-front'>Front of card</div>
      <div className='flashcard-back'>Back of card</div>
    </section>
  );
};

export default Flashcard;
