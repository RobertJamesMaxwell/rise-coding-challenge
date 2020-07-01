import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = () => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <section
      className='flashcard-grid'
      onClick={() => {
        console.log("isFlipped: ", isFlipped);
        return setFlipped(!isFlipped);
      }}
    >
      <div className='flashcard flashcard-front'>Front of card</div>
      <div className='flashcard flashcard-back'>Back of card</div>
    </section>
  );
};

export default Flashcard;
