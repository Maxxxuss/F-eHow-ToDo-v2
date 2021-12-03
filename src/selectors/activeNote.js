import { createSelector } from "reselect";
import moment from "moment";

export const getActiveNotes = (state) => state.activeNote;

export const getActiveK = (state) => state.activeNote[0].kanbanboard[0];

export const getAllActiveNotes = createSelector(getActiveNotes, (activeNotes) =>
  activeNotes.map((activeNote) => ({
    id: activeNote.id ? activeNote.id : "",
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
    kabanboard: activeNote.kanbanboard ? activeNote.kanbanboard : "",
    // k_id: activeNote.kanbanboard.k_id ?  activeNote.kanbanboard.k_id: "",
    // k_titel: activeNote.kanbanboard.k_titel ?  activeNote.kanbanboard.k_titel: "",
    // k_description: activeNote.kanbanboard.k_description ?  activeNote.kanbanboard.k_description: "",
    // k_dastesToFinish: activeNote.kanbanboard.k_dastesToFinish ?  activeNote.kanbanboard.k_dastesToFinish: "",
    // k_colID: activeNote.kanbanboard.k_colID ?  activeNote.kanbanboard.k_colID: "",
  }))
);

// export const getAllActiveNoteStories = createSelector(
//   getActiveK,
//   (activeNotes) =>
//     activeNotes.map((activeColumn) => ({
//       k_id: activeColumn.k_id ? activeColumn.k_id : "",
//       k_titel: activeColumn.k_titel ? activeColumn.k_titel : "",
//       k_description: activeColumn.k_description
//         ? activeColumn.k_description
//         : "",
//       k_dastesToFinish: activeColumn.k_dastesToFinish
//         ? activeColumn.k_dastesToFinish
//         : "",
//       k_colID: activeColumn.k_colID ? activeColumn.k_colID : "",
//       columns: {
//         // "column-1":grouped.get("column-1"),
//         // "column-1": group(activeNotes, "column-1"),
//         "column-1": group(activeNotes, "column-1"),
//         "column-2": group(activeNotes, "column-2"),
//         "column-3": group(activeNotes, "column-3"),
//         "column-4": group(activeNotes, "column-4"),
//       },
//       // activeColumn: activeColumn,
//       // activeNotes: activeNotes
//     }))
// );

export const getAllActiveNoteStories = createSelector(
  getActiveK,
  (activeNotes) => ({
    tasks: activeNotes.map((activeColumn) => (
      {
      id: activeColumn.k_id ? activeColumn.k_id : "",
      titel: activeColumn.k_titel ? activeColumn.k_titel : "",
      description: activeColumn.k_description ? activeColumn.k_description : "",
    })),

    // columns: {
    //   "column-1": {
    //     id: "column-1",
    //     title: "Backlog",
    //       taskIds: group(activeNotes, "column-1")
    //       ? group(activeNotes, "column-1")
    //       : [],
    //   },
    //   "column-2": {
    //     id: "column-2",
    //     title: "To Do",
    //       taskIds: group(activeNotes, "column-2")
    //       ? group(activeNotes, "column-2")
    //       : [],
    //   },
    //   "column-3": {
    //     id: "column-3",
    //     title: "In Progress",
    //     taskIds: group(activeNotes, "column-3")
    //       ? group(activeNotes, "column-3")
    //       : [],
    //   },
    //   "column-4": {
    //     id: "column-4",
    //     title: "Done",
    //     taskIds: group(activeNotes, "column-4")
    //       ? group(activeNotes, "column-4")
    //       : [],
    //   },
    // },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"],
  })
);

function group(list, varCol) {
  const grouped = groupBy(list, (pet) => pet.k_colID);

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      if (!map.has(key)) {
        map.set(key, [item.k_id]);
      } else {
        map.get(key).push(item.k_id);
      }
    });
    return map;
  }

  return grouped.get(varCol);
}
