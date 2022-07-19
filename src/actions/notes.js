import { v4 as uuidv4 } from "uuid";

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

  task_current,
  task_tomorrow,
  task_afert_Tomorrow,
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

    task_current,
    task_tomorrow,
    task_afert_Tomorrow,
  },
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

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

export const editNoteStory = (noteId, userStorieID, updates) => ({
  type: "EDIT_NOTE_STORY",
  noteId,
  userStorieID,
  updates,
});

export const editExpenseBuzword = (id, updates) => ({
  type: "EDIT_EXPENSE_BUZWORD",
  id,
  updates,
});
