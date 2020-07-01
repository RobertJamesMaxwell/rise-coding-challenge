import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  console.log("props card:", props.flashcard);
  const { front, back } = props.flashcard;

  const image = back.type === "image" && back.content;
  console.log(("image", image));
  return (
    <section
      className={`card ${isFlipped ? "isFlipped" : ""}`}
      onClick={() => {
        console.log("isFlipped: ", isFlipped);
        return setFlipped(!isFlipped);
      }}
    >
      <div
        className={`front 
        ${isFlipped ? "no-display" : ""} 
        ${front.type === "image" ? ".image-card" : ""}`}
      >
        {front.content}
      </div>
      <div
        className={`back 
      ${isFlipped ? "" : "no-display"}
      ${back.type === "image" ? ".image" : ""}`}
        style={{
          backgroundImage: `url(${back.content}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {back.type === "text" && back.content}
      </div>
    </section>
  );
};

export default Flashcard;
