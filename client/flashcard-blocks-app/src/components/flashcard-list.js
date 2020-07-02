import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";
import Modal from "./modal";
import NewCardForm from "./new-card-form";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/flashcard-blocks")
      .then((res) => res.json())
      .then((res) => setFlashcards(res[0].cards))
      .catch(console.error);
  }, [setShowModal]);

  return (
    <div className='flashcard-grid'>
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
      {flashcards.length ? (
        <section className='add-flashcard__container'>
          <button
            onClick={() => setShowModal(!showModal)}
            className='add-flashcard__button'
          >
            <div>+</div>
            Add Flashcard
          </button>
        </section>
      ) : (
        <></>
      )}
      {showModal ? (
        <Modal>
          <NewCardForm
            setShowModal={setShowModal}
            showModal={showModal}
          ></NewCardForm>
        </Modal>
      ) : null}
    </div>
  );
};

export default FlashcardList;
