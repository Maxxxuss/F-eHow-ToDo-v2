import { createSelector } from "reselect";
import moment from "moment";

export const getActiveNotes = (state) => state.activeNote;

// export const getActiveK = (state) => state.activeNote[0].kanbanboard[0];

export const getAllActiveNotes = createSelector(getActiveNotes, (activeNotes) =>
  activeNotes.map((activeNote) => ({
    id: activeNote.id ? activeNote.id : "7054f393-9cc1-460f-b8e7-eec9c007492a",
    categorie: activeNote.categorie ? activeNote.categorie : "",
    noteUpdateDate: activeNote.noteUpdateDate ? activeNote.noteUpdateDate : "",
    noteStatus: activeNote.noteStatus ? activeNote.noteStatus : "",
    description: activeNote.description ? activeNote.description : "",
    prio: activeNote.prio ? activeNote.prio : "",
    sRelevance: activeNote.sRelevance ? activeNote.sRelevance : "",
    relevance: activeNote.relevance ? activeNote.relevance : "",
    important: activeNote.important ? activeNote.important : "",
    noteDecscription: activeNote.noteDecscription
      ? activeNote.noteDecscription
      : "",
    datesToFinish: activeNote.datesToFinish ? activeNote.datesToFinish : "",
    nextStep: activeNote.nextStep ? activeNote.nextStep : "",
    riskAuswirkung: activeNote.riskAuswirkung ? activeNote.riskAuswirkung : "",
    riskWahrscheinlichkeit: activeNote.riskWahrscheinlichkeit
      ? activeNote.riskWahrscheinlichkeit
      : "",
    infoNote: activeNote.infoNote ? activeNote.infoNote : "",
    journalNote: activeNote.journalNote ? activeNote.journalNote : "",
    snooze: activeNote.snooze ? activeNote.snooze : "",
    onHold: activeNote.onHold ? activeNote.onHold : "",
    effort: activeNote.effort ? activeNote.effort : "",
    kanbanboard: activeNote.kanbanboard ? activeNote.kanbanboard : "",
    countNoteStories: activeNote.countNoteStories
      ? activeNote.countNoteStories
      : "",
  }))
);

// export const getAllActiveNoteStories = createSelector(
//   getActiveK,
//   (activeNotes) => ({
//     tasks: activeNotes.map((activeColumn) => ({
//       id: activeColumn.k_id ? activeColumn.k_id : "",
//       titel: activeColumn.k_titel ? activeColumn.k_titel : "",
//       description: activeColumn.k_description ? activeColumn.k_description : "",
//     })),

//     columnOrder: ["column-1", "column-2", "column-3", "column-4"],
//   })
// );

// function group(list, varCol) {
//   const grouped = groupBy(list, (pet) => pet.k_colID);

//   function groupBy(list, keyGetter) {
//     const map = new Map();
//     list.forEach((item) => {
//       const key = keyGetter(item);
//       if (!map.has(key)) {
//         map.set(key, [item.k_id]);
//       } else {
//         map.get(key).push(item.k_id);
//       }
//     });
//     return map;
//   }

//   return grouped.get(varCol);
// }
