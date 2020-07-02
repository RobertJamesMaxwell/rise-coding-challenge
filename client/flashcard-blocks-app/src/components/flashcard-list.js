import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";
import Modal from "./modal";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newCardFrontValue, setNewCardFrontValue] = useState("");
  const [newCardBackValue, setNewCardBackValue] = useState("");

  // fetch("http://localhost:5000/flashcard-blocks", {
  //   mode: "no-cors",
  //   Accept: "application/json",
  // }).then((res) => res.json());

  const addFlashcard = () => {
    setShowModal(!showModal);
    //only handling text for new cards, not images
    const newCardData = {
      front: {
        type: "text",
        content: newCardFrontValue,
      },
      back: {
        type: "text",
        content: setNewCardBackValue,
      },
    };
    console.log("newCard: ", newCardData);
    fetch("http://localhost:5000/flashcard-blocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCardData),
    }).then((res) => {
      console.log("new card from server", res);
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/flashcard-blocks")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setFlashcards(res[0].cards);
        return res;
      });
  }, []);

  return (
    <div className='flashcard-grid'>
      {/* <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard> */}
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
          <form onSubmit={addFlashcard}>
            <label>
              Front:
              <input
                type='text'
                value={newCardFrontValue}
                onChange={(e) => setNewCardFrontValue(e.target.value)}
              />
            </label>
            <label>
              Back:
              <input
                type='text'
                value={newCardBackValue}
                onChange={(e) => setNewCardBackValue(e.target.value)}
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default FlashcardList;
