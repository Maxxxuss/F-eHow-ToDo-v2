import { createSelector } from "reselect";

export const getNoteDocs = (state) => state.noteDocs;

export const getAllNoteDocs = createSelector(getNoteDocs, (noteDocs) =>
  noteDocs.map((noteDoc) => ({
    id: noteDoc.id ? noteDoc.id : "",
    noteID: noteDoc.noteID ? noteDoc.noteID : "",
    docAddedDate: noteDoc.docAddedDate ? noteDoc.docAddedDate : "",
    docTitel: noteDoc.docTitel ? noteDoc.docTitel : "",
    docURL: noteDoc.docURL ? noteDoc.docURL : "",
    docCategorie: noteDoc.docCategorie ? noteDoc.docCategorie : "",
  }))
);
