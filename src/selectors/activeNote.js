import { createSelector } from "reselect";
import moment from "moment";

export const getActiveNotes = (state) => state.activeNote;



export const getAllActiveNotes = createSelector(getActiveNotes, (activeNotes) =>

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

    buzwords: activeNotes.buzwords ? activeNotes.buzwords : [],
    bTitel: activeNotes.bTitel ? activeNotes.bTitel : [],


    countNoteStories: activeNotes.countNoteStories
      ? activeNotes.countNoteStories
      : 0,
      })

);

