import React, { useState } from "react";

const NewCardForm = (props) => {
  console.log("new card form props", props);
  const { showModal, setShowModal } = props;
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
        console.log("New card from server", res);
        setShowModal(!showModal);
        setNewCardFrontValue("");
        setNewCardBackValue("");
      })
      .catch(console.error);
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
