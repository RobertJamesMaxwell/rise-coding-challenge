import React, { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import "./flashcard-list.css";
import Modal from "./modal";
import NewCardForm from "./new-card-form";
import routes from "../routes";
import axios from "axios";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(routes.FLASHCARD_BLOCKS)
      .then((res) => res.data)
      .then((res) => setFlashcards(res[0].cards))
      .catch(console.error);
  }, [showModal]);

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
