import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  const { front, back } = props.flashcard;

  const backgroundImageStyles = {
    backgroundImage: `url(${back.content}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      className={`card ${isFlipped ? "isFlipped" : ""}`}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={`front 
        ${isFlipped ? "no-display" : ""} 
        `}
      >
        {front.content}
      </div>
      <div
        className={`back 
        ${isFlipped ? "" : "no-display"}
        `}
        style={back.type === "image" ? backgroundImageStyles : {}}
      >
        {back.type === "text" && back.content}
      </div>
    </section>
  );
};

export default Flashcard;
