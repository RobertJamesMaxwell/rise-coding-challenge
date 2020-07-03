export const createFlashcardObject = (type, frontContent, backContent) => {
  return {
    front: {
      type,
      content: frontContent,
    },
    back: {
      type,
      content: backContent,
    },
  };
};
