// WORK on:
// 1. Edit User Story
// Entweder Edit expense && active Note
// oper Dit Expense und Update Active Note

import {
  TextField,
  Autocomplete,
  Button,
  Grid,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../Button/DoubleCheckRemoveButton";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
import { autoSaveFunc } from "./autoSave";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { getAllActiveNotes } from "../../selectors/activeNote";
import { connect } from "react-redux";

import store from "../../store/configureStore";

export const ShortDescription = (properties) => {
  const props = properties;
  const ndsProps = properties.NotesDashboradProps;
  const [activeNoteID, setActiveNoteID] = useState("");
  const [description, setDescription] = useState("");

  const [relevance, setrelevance] = useState("");
  const [important, setimportant] = useState("");
  const [noteDecscription, setnoteDecscription] = useState("");
  // const [noteDecscription, setnoteDecscription] = useState({ ops: [] });

  const [datesToFinish, setdatesToFinish] = useState("");
  const [nextStep, setnextStep] = useState("");
  const [infoNote, setinfoNote] = useState("");
  const [effort, seteffort] = useState("");
  const [noteStatus, setnoteStatus] = useState("");

  const [activeCategorie, setActiveCategorie] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  //KanbanIndex
  const [aNoteId, setaNoteId] = useState("");
  const [noteId, setNoteId] = useState("");
  const [aUserStorieID, setAUserStorieID] = useState("");
  const [counterNoteStories, setCounterNoteStories] = useState("");
  const [storieClearer, setStorieClearer] = useState("");

  const space = "<p><br></p> ";
  const timeStamp = moment().format("ddd - DD.MM.YY");

  const clearInputValues = (ndsProps) => {
    ndsProps.removeActiveNote();
    setActiveNoteID("");
    setDescription("");
    setrelevance("");
    setimportant("");
    setnoteDecscription("");
    setdatesToFinish("");
    setnextStep("");
    setinfoNote("");
    seteffort("");
    setInputCategorie("");
    setActiveCategorie("");
  };

  const clearStorieInput = (ndsProps) => {
    setActiveNoteID("");
    setDescription("");
    setrelevance("");
    setimportant("");
    setnoteDecscription("");
    setdatesToFinish("");
    setnextStep("");
    setinfoNote("");
    seteffort("");
    setInputCategorie("");
    setActiveCategorie("");
  };

  //SET FOR ACTIVE USER STORIE
  if (
    ndsProps.activeNote.id != "" &&
    ndsProps.activeUserStorie.length >0 &&

    ndsProps.activeUserStorie[0].storieID != "" &&
    ndsProps.activeUserStorie[0].storieID != aUserStorieID
  ) {
    setDescription(ndsProps.activeUserStorie[0].titel);
    setnoteDecscription(ndsProps.activeUserStorie[0].description);
    setAUserStorieID(ndsProps.activeUserStorie[0].storieID);
  }

  if (
    ndsProps.activeNote.id != "" &&
    ndsProps.activeNote.id === activeNoteID &&
    ndsProps.activeUserStorie.length >0 &&

    ndsProps.activeUserStorie[0].storieID != "" &&

    ndsProps.activeUserStorie[0].collapse === true &&
    storieClearer != false
  ) {
    setDescription("");
    setnoteDecscription("");
    setStorieClearer(false);
  }

  // SET - Active Note
  if (
    ndsProps.activeNote.id != "" &&
    ndsProps.activeUserStorie.length >0 &&

    ndsProps.activeNote.id != activeNoteID
    // && ndsProps.activeUserStorie.length > 0 &&
    // ndsProps.activeUserStorie[0].storieID === ""
  ) {
    setActiveNoteID(ndsProps.activeNote.id);
    setDescription(ndsProps.activeNote.description);
    setrelevance(ndsProps.activeNote.relevance);
    setimportant(ndsProps.activeNote.important);
    setnoteDecscription(ndsProps.activeNote.noteDecscription);

    setInputCategorie(ndsProps.activeNote.categorie);
    setdatesToFinish(ndsProps.activeNote.datesToFinish);
    setnextStep(ndsProps.activeNote.nextStep);
    setinfoNote(ndsProps.activeNote.infoNote);
    seteffort(ndsProps.activeNote.effort);
    setnoteStatus(ndsProps.activeNote.noteStatus);
    setStorieClearer(true);
    setCounterNoteStories(ndsProps.activeNote.countNoteStories);
  }

  const updates = {
    id: activeNoteID,
    description: description,
    relevance: relevance ? relevance : 1,
    important: important ? important : 1,
    noteDecscription: space + timeStamp + noteDecscription,
    datesToFinish: datesToFinish ? datesToFinish : moment().add(1, "days"),
    categorie: inputCategorie
      ? inputCategorie
      : ndsProps.activeNote.id != ""
      ? ndsProps.activeNote.categorie
      : properties.activeCategorie.catName,
    nextStep: nextStep,
    infoNote: infoNote,
    effort: effort,
    kanbanboard: {
      tasks: [],
      columns: {
        "column-1": {
          id: "column-1",
          title: "Backlock",
          taskIds: [],
        },

        "column-3": {
          id: "column-3",
          title: "In Progress",
          taskIds: [],
        },
        "column-4": {
          id: "column-4",
          title: "Done",
          taskIds: [],
        },
      },
      columnOrder: ["column-1", "column-3", "column-4"],
    },
  };

  if (ndsProps.activeNote.length > 0 && ndsProps.activeNote.id != aNoteId) {
    setaNoteId(ndsProps.activeNote.id);
    setNoteId(ndsProps.activeNote.id);
  }

  const addStorie = {
    aNoteId: aNoteId,
    storieID: uuidv4(),
    noteId: noteId,
    titel: description,
    description: space + timeStamp + noteDecscription,
    column: "column-1",
  };

  const updateStorie = {
    titel: description,
    description: space + timeStamp + noteDecscription,
  };

  function statusChange(ndsProps, updates) {
    if (noteStatus === "open") {
      const noteStatus = { ...updates, ...{ noteStatus: "closed" } };
      ndsProps.editExpense(ndsProps.activeNote.id, noteStatus);
      autoSaveFunc(ndsProps);
    } else {
      const noteStatus = { ...updates, ...{ noteStatus: "open" } };
      ndsProps.editExpense(ndsProps.activeNote.id, noteStatus);
      autoSaveFunc(ndsProps);
    }
  }

  var modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: "red" }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  var formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
  ];

  const kanbanUpdates = {
    aNoteId: aNoteId,
    storieID: uuidv4(),
    noteId: noteId,
    titel: description,
    description: space + timeStamp + noteDecscription,
    column: "column-1",
  };

  function decider(ndsProps) {
    if (
      ndsProps.activeNote.id != "" &&
      ndsProps.activeUserStorie.length > 0 &&
      ndsProps.activeUserStorie[0].collapse === false &&
      ndsProps.activeUserStorie[0].storieID === ""
    ) {
      return (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            ndsProps.editExpense(ndsProps.activeNote.id, updates) &&
            clearInputValues(ndsProps)
          }
        >
          Edit Note
        </Button>
      );
    }

    if (
      ndsProps.activeNote.id != "" &&
      ndsProps.activeUserStorie.length > 0 &&
      ndsProps.activeUserStorie[0].collapse > 0
      //&& ndsProps.activeUserStorie[0].storieID === ""
    )
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            ndsProps.addNoteStory(activeNoteID, kanbanUpdates) 
            // && editActiveNote()
            && ndsProps.addNoteStory_ActiveNote(activeNoteID, kanbanUpdates)

            &&clearStorieInput()
          }
        >
          Add Story
        </Button>
      );

    if (
      ndsProps.activeNote.id != "" &&
      ndsProps.activeUserStorie.length > 0 &&
      ndsProps.activeUserStorie[0].storieID != ""
    )
      return (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            ndsProps.editNoteStory(
              activeNoteID,
              ndsProps.activeUserStorie[0].storieID,
              updateStorie

            )

            && ndsProps.editNoteStory_ActiveNote(
              activeNoteID,
              ndsProps.activeUserStorie[0].storieID,
              updateStorie
            ) &&
            setStorieClearer(false) &&
            clearStorieInput()
          }
        >
          Edit Story
        </Button>
      );
    else
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            ndsProps.addExpense(updates) && clearInputValues(ndsProps)
          }
        >
          Add NOte
        </Button>
      );
  }

  function deciderClearInputValue(ndsProps) {
    // IF EDIT -CLEAR TO - ADD Story
    if (
      ndsProps.activeNote.length > 0 &&
      ndsProps.activeUserStorie.length > 0 &&
      ndsProps.activeUserStorie[0].storieID != ""
    )
      return (
        <div>
          <IconButton
            onClick={() =>
              ndsProps.removeActiveUserStory() &&
              ndsProps.setActiveStory({
                collapse: true,
              }) &&
              clearStorieInput(ndsProps)
            }
            size="large"
            color="secondary"
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
      );
    else
      return (
        <div>
          <IconButton
            onClick={() => clearInputValues(ndsProps)}
            size="large"
            color="primary"
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
      );
  }

  return (
    <div>
      <Grid mt={1} mb={1}>
        <ButtonGroup fullWidth={true}>
          {decider(ndsProps)}

          {activeNoteID ? (
            <Button
              variant="outlined"
              onClick={() =>
                statusChange(ndsProps, updates) + clearInputValues(ndsProps)
              }
            >
              Set Satus: {noteStatus === "open" ? "close" : "open"}
            </Button>
          ) : (
            ""
          )}

          {activeNoteID ? (
            <DoubleCheckRemoveButton
              activeNote={ndsProps.activeNote}
              handelRemoveNote={ndsProps.removeExpense}
            />
          ) : (
            ""
          )}
        </ButtonGroup>

        <Button onClick={() => console.log("Show ndsProps: ", props)}>
          SHow Props
        </Button>
      </Grid>

      <Grid
        // ml={1}
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item spacing={1}>
          <Grid item xs={1}>
            {deciderClearInputValue(ndsProps)}
          </Grid>

          <Grid item xs={11}>
            <TextField
              label="Titel"
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              color="secondary"
              fullWidth
              //
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={1}>
            <TextField
              label="Days"
              onChange={(e) =>
                setdatesToFinish(moment().add(e.target.value, "days"))
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Finish Till"
              value={
                datesToFinish
                  ? moment(datesToFinish).format("ddd - DD.MM.YY")
                  : ""
              }
              onChange={(e) =>
                setdatesToFinish(moment().add(e.target.value, "days"))
              }
              variant="filled"
              color="secondary"
              fullWidth
            />
          </Grid>

          <Grid item xs>
            <TextField
              label="Dringlich"
              variant="filled"
              value={relevance}
              onChange={(e) => setrelevance(e.target.value)}
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Wichtig"
              variant="filled"
              color="secondary"
              value={important}
              onChange={(e) => setimportant(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs>
            <TextField
              label="Aufwand"
              variant="filled"
              value={effort}
              onChange={(e) => seteffort(e.target.value)}
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              value={activeCategorie}
              onChange={(e, newValue) => {
                setActiveCategorie(newValue);
              }}
              inputValue={
                inputCategorie
                  ? inputCategorie
                  : ndsProps.activeNote.id != ""
                  ? ndsProps.activeNote.categorie
                  : properties.activeCategorie.catName
              }
              onInputChange={(e, newInputValue) => {
                setInputCategorie(newInputValue);
              }}
              options={ndsProps.categories}
              getOptionLabel={(option) =>
                option.catName ? option.catName : ""
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Project"
                  variant="filled"
                  color="secondary"
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>

      <ReactQuill
        theme="snow"
        value={noteDecscription}
        onChange={setnoteDecscription}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export function ButtonSwitch(add_edit, remove, updates, bTitel) {
  return (
    <div>
      <ButtonGroup color="primary" variant="text" fullWidth={true}>
        <Button variant="contained" onClick={() => add_edit(updates)}>
          {bTitel}
        </Button>
      </ButtonGroup>
    </div>
  );
}

console.log(store.getState());

const mapStateToProps = (state) => {
  return {
    // noteStories: getAllActiveNoteStories(state),
    activeNote: getAllActiveNotes(state),
  };
};

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, null)(ShortDescription);
