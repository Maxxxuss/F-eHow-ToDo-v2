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
  linkTitel,
  linkURL,
  buzwords,
  // docCounter
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
    linkTitel,
    linkURL,
    buzwords,
    // docCounter
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

export const editActiveNoteBuzword = (id, updates) => ({
  type: "EDIT_ACtiVENOTE_BUZWORD",
  id,
  updates,
});
