import React from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";

const FlashcardList = ({ flashcards }) => {
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
