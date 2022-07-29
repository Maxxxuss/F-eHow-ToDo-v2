import { v4 as uuidv4 } from "uuid";

export const addNoteDoc = ({
  noteID,
  docCategorie,
  docTitel,
  docURL,
  docAdded,
} = {}) => ({
  type: "ADD_NOTE_DOC",
  noteDoc: {
    id: uuidv4(),
    noteID,
    docCategorie,
    docTitel,
    docURL,
    docAdded,
  },
});
