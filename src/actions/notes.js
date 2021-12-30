import { v4 as uuidv4 } from "uuid";

// ADD_EXPENSE
export const addExpense = ({
  description,
  relevance,
  important,
  noteDecscription,
  datesToFinish,
  calenderFocused,
  categorie,
  noteUpdateDate,
  noteStatus,
  nextStep,
  riskAuswirkung,
  riskWahrscheinlichkeit,
  infoNote,
  journalNote,
  snooze,
  onHold,
  effort,
  kanbanboard: { tasks, columns, columnOrder },
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    relevance,
    important,
    noteDecscription,
    datesToFinish,
    calenderFocused,
    relevance,
    categorie,
    noteUpdateDate,
    noteStatus,
    nextStep,
    riskAuswirkung,
    riskWahrscheinlichkeit,
    infoNote,
    journalNote,
    snooze,
    onHold,
    effort,
    kanbanboard: {
      tasks,
      columns,
      columnOrder,
    },
    //   k_id: uuidv4(),
    //   k_titel,
    //   k_description,
    //   k_dastesToFinish,
    //   k_colID,
  },
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// export const removeExpense = ({ id } = {}) => {
//   return (dispatch) => {
//     dispatch(({
//       type: 'REMOVE_EXPENSE',
//       id

//     }));
//   }
// }

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const addNoteStory = (noteId, updates) => ({
  type: "ADD_NOTE_STORY",
  noteId,
  updates,
});

export const editNoteStory = (noteId, userStorieID,updates) => ({
  type: "EDIT_NOTE_STORY",
  noteId,
  userStorieID,
  updates,
});

// export const startStory = (id, updates) => ({
//   type: "START_KSTORY",
//   id,
//   updates
// });

// export const removeStory  = ({ id } ) => ({
//   type: "REMOVE_KSTROY",
//   id,
// });
