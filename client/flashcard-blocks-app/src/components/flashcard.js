import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  const [cardHasBeenTouched, setCardHasBeenTouched] = useState(false);
  const { front, back } = props.flashcard;

  const backgroundImageStyles = {
    backgroundImage: `url(${back.content}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleCardClick = () => {
    setFlipped(!isFlipped);
    if (!cardHasBeenTouched) {
      setCardHasBeenTouched(true);
    }
  };

  return (
    <section
      className={`card ${isFlipped ? "isFlipped" : "isNotFlipped"}`}
      onClick={handleCardClick}
    >
      <div
        className={`front 
        ${isFlipped ? "no-display" : ""} 
        `}
      >
        <p className='text-content'>{front.content}</p>
      </div>
      <div
        className={`back 
        ${isFlipped ? "" : "no-display"}
        `}
        style={back.type === "image" ? backgroundImageStyles : {}}
      >
        <p className='text-content'>{back.type === "text" && back.content}</p>
      </div>
      <div
        className={`flip-icon ${cardHasBeenTouched ? "" : "flip-icon-text"}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='23'
          height='17'
          viewBox='0 0 23 17'
          focusable='false'
        >
          <path
            fillRule='nonzero'
            d='M19.347 8.275l1.88 1.714a.727.727 0 0 0 .98-1.074l-3.225-2.941a.727.727 0 0 0-1.027.047l-2.94 3.224a.727.727 0 0 0 1.075.98l1.802-1.976a6.545 6.545 0 0 1-11.56 4.288.727.727 0 1 0-1.114.935 8 8 0 0 0 14.129-5.197zm-16.039.162l-1.79-1.633a.727.727 0 1 0-.98 1.074l3.223 2.94c.297.272.757.25 1.028-.046l2.94-3.224a.727.727 0 0 0-1.075-.98L4.768 8.636a6.545 6.545 0 0 1 11.555-4.482.727.727 0 1 0 1.114-.936A8 8 0 0 0 3.308 8.437z'
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Flashcard;
