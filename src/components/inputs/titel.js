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

export const ShortDescription = (properties) => {
  const props = properties.NotesDashboradProps;
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

  const clearInputValues = (props) => {
    props.removeActiveNote();
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

  const clearStorieInput = (props) => {
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
    props.activeNote != "" &&
    props.activeNote[0].id === activeNoteID &&
    props.activeUserStorie[0].storieID != "" &&
    props.activeUserStorie[0].storieID != aUserStorieID
  ) {
    setDescription(props.activeUserStorie[0].titel);
    setnoteDecscription(props.activeUserStorie[0].description);
    setAUserStorieID(props.activeUserStorie[0].storieID);
  }

  if (
    props.activeNote != "" &&
    props.activeNote[0].id === activeNoteID &&
    props.activeUserStorie[0].collapse === true &&
    storieClearer != false
  ) {
    setDescription("");
    setnoteDecscription("");
    setStorieClearer(false);
  }

  // SET - Active Note
  if (
    props.activeNote != "" &&
    props.activeNote[0].id != activeNoteID &&
    props.activeUserStorie.length > 0 &&
    props.activeUserStorie[0].storieID === ""
  ) {
    setActiveNoteID(props.activeNote[0].id);
    setDescription(props.activeNote[0].description);
    setrelevance(props.activeNote[0].relevance);
    setimportant(props.activeNote[0].important);
    setnoteDecscription(props.activeNote[0].noteDecscription);

    setInputCategorie(props.activeNote[0].categorie);
    setdatesToFinish(props.activeNote[0].datesToFinish);
    setnextStep(props.activeNote[0].nextStep);
    setinfoNote(props.activeNote[0].infoNote);
    seteffort(props.activeNote[0].effort);
    setnoteStatus(props.activeNote[0].noteStatus);
    setStorieClearer(true);
    setCounterNoteStories(props.activeNote[0].countNoteStories);
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
      : props.activeNote != ""
      ? props.activeNote[0].categorie
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

  if (props.activeNote.length > 0 && props.activeNote[0].id != aNoteId) {
    setaNoteId(props.activeNote[0].id);
    setNoteId(props.activeNote[0].id);
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

  function statusChange(props, updates) {
    if (noteStatus === "open") {
      const noteStatus = { ...updates, ...{ noteStatus: "closed" } };
      props.editExpense(props.activeNote[0].id, noteStatus);
      autoSaveFunc(props);
    } else {
      const noteStatus = { ...updates, ...{ noteStatus: "open" } };
      props.editExpense(props.activeNote[0].id, noteStatus);
      autoSaveFunc(props);
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

  function decider(props) {
    if (
      props.activeNote.length > 0 &&
      props.activeUserStorie.length > 0 &&
      props.activeUserStorie[0].collapse === false &&
      props.activeUserStorie[0].storieID === ""
    ) {
      return (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            props.editExpense(props.activeNote[0].id, updates) &&
            clearInputValues(props)
          }
        >
          Edit Note
        </Button>
      );
    }

    if (
      props.activeNote.length > 0 &&
      props.activeUserStorie.length > 0 &&
      props.activeUserStorie[0].storieID === ""
    )
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            props.addNoteStory(
              activeNoteID, 
              kanbanUpdates
            ) && clearStorieInput()
          }
        >
          Add Story
        </Button>
      );

    if (
      props.activeNote.length > 0 &&
      props.activeUserStorie.length > 0 &&
      props.activeUserStorie[0].storieID != ""
    )
      return (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            props.editUserStorie(
              props.activeUserStorie[0].storieID,
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
          onClick={() => props.addExpense(updates) && clearInputValues(props)}
        >
          Add NOte
        </Button>
      );
  }

  function deciderClearInputValue(props) {
    // IF EDIT -CLEAR TO - ADD Story
    if (
      props.activeNote.length > 0 &&
      props.activeUserStorie.length > 0 &&
      props.activeUserStorie[0].storieID != ""
    )
      return (
        <div>
          <IconButton
            onClick={() =>
              props.removeActiveUserStory() &&
              props.setActiveStory({
                collapse: true,
              }) &&
              clearStorieInput(props)
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
            onClick={() => clearInputValues(props)}
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
          {decider(props)}

          {activeNoteID ? (
            <Button
              variant="outlined"
              onClick={() =>
                statusChange(props, updates) + clearInputValues(props)
              }
            >
              Set Satus: {noteStatus === "open" ? "close" : "open"}
            </Button>
          ) : (
            ""
          )}

          {activeNoteID ? (
            <DoubleCheckRemoveButton
              activeNote={props.activeNote}
              handelRemoveNote={props.removeExpense}
            />
          ) : (
            ""
          )}
        </ButtonGroup>

        <Button onClick={() => console.log("Show props: ", props)}>
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
            {deciderClearInputValue(props)}
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
                  : props.activeNote != ""
                  ? props.activeNote[0].categorie
                  : properties.activeCategorie.catName
              }
              onInputChange={(e, newInputValue) => {
                setInputCategorie(newInputValue);
              }}
              options={props.categories}
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
