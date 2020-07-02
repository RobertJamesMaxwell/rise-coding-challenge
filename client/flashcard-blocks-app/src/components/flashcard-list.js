import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";
import Modal from "./modal";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newCardFrontValue, setNewCardFrontValue] = useState("");
  const [newCardBackValue, setNewCardBackValue] = useState("");

  // New cards are automatically made with content type of 'text'. 'image' type is not supported
  const addFlashcard = () => {
    const newCardData = {
      front: {
        type: "text",
        content: newCardFrontValue,
      },
      back: {
        type: "text",
        content: newCardBackValue,
      },
    };
    fetch("http://localhost:5000/flashcard-blocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCardData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("new card from server", res);
        setShowModal(!showModal);
        setNewCardFrontValue("");
        setNewCardBackValue("");
      })
      .catch(console.error);
  };

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
          <form className='form' onSubmit={addFlashcard}>
            <label>
              <div>Front:</div>
              <textarea
                rows='6'
                className='textarea'
                value={newCardFrontValue}
                onChange={(e) => setNewCardFrontValue(e.target.value)}
              />
            </label>
            <label>
              <div>Back:</div>
              <textarea
                rows='6'
                className='textarea'
                value={newCardBackValue}
                onChange={(e) => setNewCardBackValue(e.target.value)}
              />
            </label>
            <div className='buttons'>
              <input type='submit' value='Submit' />
              <button type='cancel' onClick={() => setShowModal(!showModal)}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default FlashcardList;
