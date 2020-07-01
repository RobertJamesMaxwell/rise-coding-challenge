import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);

  // fetch("http://localhost:5000/flashcard-blocks", {
  //   mode: "no-cors",
  //   Accept: "application/json",
  // }).then((res) => res.json());

  useEffect(() => {
    fetch("http://localhost:5000/flashcard-blocks")
      .then((res) => res.json())
      .then(console.log);
  }, [flashcards]);

  return (
    <div className='flashcard-grid'>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      {/* {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })} */}
    </div>
  );
};

export default FlashcardList;
