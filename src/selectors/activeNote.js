import { createSelector } from "reselect";
import moment from "moment";

export const getActiveNotes = (state) => state.activeNote;

// export const getActiveK = (state) => state.activeNote.kanbanboard[0];

export const getAllActiveNotes = createSelector(getActiveNotes, (activeNotes) =>
  // activeNotes.map((activeNote) => ({
({
    id: activeNotes.id ? activeNotes.id : "",
    categorie: activeNotes.categorie ? activeNotes.categorie : "",
    noteUpdateDate: activeNotes.noteUpdateDate ? activeNotes.noteUpdateDate : "",
    noteStatus: activeNotes.noteStatus ? activeNotes.noteStatus : "",
    description: activeNotes.description ? activeNotes.description : "",
    prio: activeNotes.prio ? activeNotes.prio : "",
    sRelevance: activeNotes.sRelevance ? activeNotes.sRelevance : "",
    relevance: activeNotes.relevance ? activeNotes.relevance : "",
    important: activeNotes.important ? activeNotes.important : "",
    noteDecscription: activeNotes.noteDecscription
      ? activeNotes.noteDecscription
      : "",
    datesToFinish: activeNotes.datesToFinish ? activeNotes.datesToFinish : "",
    nextStep: activeNotes.nextStep ? activeNotes.nextStep : "",
    riskAuswirkung: activeNotes.riskAuswirkung ? activeNotes.riskAuswirkung : "",
    riskWahrscheinlichkeit: activeNotes.riskWahrscheinlichkeit
      ? activeNotes.riskWahrscheinlichkeit
      : "",
    infoNote: activeNotes.infoNote ? activeNotes.infoNote : "",
    journalNote: activeNotes.journalNote ? activeNotes.journalNote : "",
    snooze: activeNotes.snooze ? activeNotes.snooze : "",
    onHold: activeNotes.onHold ? activeNotes.onHold : "",
    effort: activeNotes.effort ? activeNotes.effort : "",
    kanbanboard: activeNotes.kanbanboard ? activeNotes.kanbanboard : "",
    buzwords: activeNotes.buzwords ? activeNotes.buzwords : [ ],

    countNoteStories: activeNotes.countNoteStories
      ? activeNotes.countNoteStories
      : 0,
      })
  // }))
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
