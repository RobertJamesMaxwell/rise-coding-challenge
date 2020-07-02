import React, { useState } from "react";
import "./new-card-form.css";
import routes from "../routes";
import axios from "axios";

const NewCardForm = (props) => {
  const { showModal, setShowModal } = props;

  const [newCardFrontValue, setNewCardFrontValue] = useState("");
  const [newCardBackValue, setNewCardBackValue] = useState("");

  // New cards are automatically made with content type of 'text'. 'image' type is not supported
  const addFlashcard = (e) => {
    e.preventDefault();
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
    axios.post(routes.FLASHCARD_BLOCKS, { data: newCardData }).then((res) => {
      console.log(res.data);
      setNewCardFrontValue("");
      setNewCardBackValue("");
      setShowModal(!showModal);
    });
  };

  return (
    <form onSubmit={addFlashcard}>
      <label>
        <div>Front:</div>
        <textarea
          rows='6'
          value={newCardFrontValue}
          onChange={(e) => setNewCardFrontValue(e.target.value)}
        />
      </label>
      <label>
        <div>Back:</div>
        <textarea
          rows='6'
          value={newCardBackValue}
          onChange={(e) => setNewCardBackValue(e.target.value)}
        />
      </label>
      <div>
        <input type='submit' value='Submit' />
        <button type='cancel' onClick={() => setShowModal(!showModal)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewCardForm;
