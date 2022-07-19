import { v4 as uuidv4 } from "uuid";

// ADD_ACTIVE_NOTE
export const addActiveNote = ({
  id,
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

  buzwords,
  countNoteStories,
} = {}) => ({
  type: "ADD_ACTIVE_NOTE",
  activeNote: {
    id,
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

    countNoteStories,
    buzwords,
  },
});

export const removeActiveNote = () => ({
  type: "REMOVE_ACTIVE_NOTE",
  activeNote: "",
});

export const editActiveNote = (updates) => ({
  type: "EDIT_ACTIVE_NOTE",
  updates,
});

export const changeStatus = (id, updates) => ({
  type: "CHANGE_STATUS",
  id,
  updates,
});

export const addNoteStory_ActiveNote = (noteId, updates) => ({
  type: "ADD_NOTE_STORY_ACTIVE_NOTE",
  noteId,
  updates,
});

export const editNoteStory_ActiveNote = (noteId, userStorieID, updates) => ({
  type: "EDIT_NOTE_STORY_ACTIVE_NOTE",
  noteId,
  userStorieID,
  updates,
});
export const editNoteStoryColumn_ActiveNote = (
  noteId,
  userStorieID,
  updates
) => ({
  type: "EDIT_NOTE_STORY_COLUMN_ACTIVE_NOTE",
  noteId,
  userStorieID,
  updates,
});

export const editActiveNoteBuzword = (id, updates) => ({
  type: "EDIT_ACtiVENOTE_BUZWORD",
  id,
  updates,
});
