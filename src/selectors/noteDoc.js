import { createSelector } from "reselect";

export const getNoteDocs = (state) => state.noteDocs;

export const getAllNoteDocs = createSelector(getNoteDocs, (noteDocs) =>
  noteDocs.map((noteDoc) => ({
    id: noteDoc.id ? noteDoc.id : "",
    noteID: noteDoc.noteID ? noteDoc.noteID : "",
    docAdded: noteDoc.docAdded ? noteDoc.docAdded : "",
    docTitel: noteDoc.docTitel ? noteDoc.docTitel : "",
    docURL: noteDoc.docURL ? noteDoc.docURL : "",
    docCategorie: noteDoc.docCategorie ? noteDoc.docCategorie : "",
    docDescription: noteDoc.docDescription ? noteDoc.docDescription : "",
    docBuzword: noteDoc.docBuzword ? noteDoc.docBuzword : "",




  }))
);
