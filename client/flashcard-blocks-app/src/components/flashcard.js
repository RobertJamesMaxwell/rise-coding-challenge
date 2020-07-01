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
      <div className='front'>Front of card</div>
      <div className='back'>Back of card</div>
    </section>
  );
};

export default Flashcard;
