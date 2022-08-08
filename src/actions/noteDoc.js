import { v4 as uuidv4 } from "uuid";

export const addNoteDoc = ({
  noteID,
  docCategorie,
  docTitel,
  docURL,
  docAdded,
  docDescription,
} = {}) => ({
  type: "ADD_NOTE_DOC",
  noteDoc: {
    id: uuidv4(),
    noteID,
    docCategorie,
    docTitel,
    docURL,
    docAdded,
    docDescription,
  },
});

export const editNoteDoc = (id, updates) => ({
  type: "EDIT_NOTE_DOC",
  id,
  updates,
});

export const removeNoteDoc = ({ id } = {}) => ({
  type: "REMOVE_NOTE_DOC",
  id,
});
