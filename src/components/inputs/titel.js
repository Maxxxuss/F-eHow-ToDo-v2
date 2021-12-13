import {
  TextField,
  Autocomplete,
  Button,
  ButtonBase,
  Grid,
  Card,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import moment, { isMoment } from "moment";
import React, { useEffect, useState } from "react";
import {
  handelAddNote,
  handelRemoveNote,
  handelTakeChanges,
} from "../Button/AddNote";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../Button/DoubleCheckRemoveButton";
import { useHotkeys } from "react-hotkeys-hook";
import { Box } from "@mui/system";
import ReactQuill, { Quill } from "react-quill";
import { v4 as uuidv4 } from "uuid";

function hotKey(params) {}
// export function ShortDescription(properties) {

export const ShortDescription = (properties) => {
  const props = properties.NotesDashboradProps;
  const [activeNoteID, setActiveNoteID] = useState("");
  const [description, setDescription] = useState("");

  const [relevance, setrelevance] = useState("");
  const [important, setimportant] = useState("");
  const [noteDecscription, setnoteDecscription] = useState({ ops: [] });
  const [datesToFinish, setdatesToFinish] = useState("");
  const [nextStep, setnextStep] = useState("");
  const [infoNote, setinfoNote] = useState("");
  const [effort, seteffort] = useState("");
  const [noteStatus, setnoteStatus] = useState("");

  const [activeCategorie, setActiveCategorie] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  var EMPTY_DELTA = { ops: [] };

  const [theme, setTheme] = useState("snow");
  const [valueQuill, setValueQuill] = useState(EMPTY_DELTA);

  //KanbanIndex
  const [aNoteId, setaNoteId] = useState("");
  const [noteId, setNoteId] = useState("");
  const [aUserStorieID, setAUserStorieID] = useState("");

  const space = "<p><br></p> ";
  const timeStamp = moment().format("ddd - DD.MM.YY");

  const clearInputValues = (props) => {
    props.removeActiveNote();
    setActiveNoteID("");
    setDescription("");
    setrelevance("");
    setimportant("");
    setnoteDecscription({ ops: [] });
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

  // SET - Active Note

  if (
    props.activeNote != "" &&
    props.activeNote[0].id != activeNoteID &&
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
    kanbanboard: "",
    // {
    // columns:{
    //   'column-1': {
    //     id: 'column-1',
    //     title: 'Backlog',
    //     taskIds: [],
    //   },
    //   'column-2': {
    //     id: 'column-2',
    //     title: 'To do',
    //     taskIds: [],
    //   },
    //   'column-3': {
    //     id: 'column-3',
    //     title: 'In progress',
    //     taskIds: [],
    //   },
    //     'column-4': {
    //       id: 'column-4',
    //       title: 'Done',
    //       taskIds: [],
    //   },

    // }

    // }
  };

  const updatesUserStorie = {
    storieID: uuidv4(),
    noteId: activeNoteID,
    titel: description,
    column: "column-1",
  };

  // useHotkeys(
  //   "control+a",
  //   () => handelTakeChanges(props, updates)
  //    + clearInputValues(props)
  // );

  if (props.activeNote.length > 0 && props.activeNote[0].id != aNoteId) {
    setaNoteId(props.activeNote[0].id);
    setNoteId(props.activeNote[0].id);
  }

  const addStorie = {
    aNoteId: aNoteId,
    storieID: uuidv4(),
    noteId: noteId,
    titel: description,
    description: noteDecscription,
    column: "column-2",
  };

  const updateStorie = {
    titel: description,
    description: noteDecscription,
  };

  function statusChange(props, updates) {
    if (noteStatus === "open") {
      const noteStatus = { ...updates, ...{ noteStatus: "closed" } };
      handelTakeChanges(props, noteStatus);
    } else {
      const noteStatus = { ...updates, ...{ noteStatus: "open" } };
      handelTakeChanges(props, noteStatus);
    }
  }

  var modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      // [{ 'header': [1, 2, false] }],
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

  function decider(props) {
    if (
      props.activeNote.length === 0 &&
      props.activeUserStorie[0].collapse === false
    ) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.addExpense(updates)}
        >
          Add NOte
        </Button>
      );
    }
    if (
      props.activeNote.length > 0 &&
      props.activeUserStorie[0].collapse === false &&
      props.activeUserStorie[0].storieID === ""
    ) {
      return (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => props.editExpense(props.activeNote[0].id, updates)}
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
          onClick={() => props.addStory((props.activeNote[0].id, addStorie))}
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
            )
          }
        >
          Edit Story
        </Button>
      );
  }

  return (
    <div>
      <Grid mt={1} mb={1}>
        <ButtonGroup>{decider(props)}</ButtonGroup>

        {/* <ButtonGroup color="primary" variant="text" fullWidth={true}>
          {activeNoteID ? (
            <Button
              variant="contained"
              onClick={() =>
                handelTakeChanges(props, updates) + clearInputValues(props)
              }
            >
              take Changes
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() =>
                handelAddNote(props, updates) + clearInputValues(props)
              }
            >
              Direkt Add
            </Button>
          )}
          <Button
            variant="outlined"
            onClick={() =>
              // handelTakeChanges(props, updates) + clearInputValues(props)
              statusChange(props, updates) + clearInputValues(props)
            }
          >
            Satus Changes
          </Button>

          <Button
            variant="outlined"
            // onClick={() => clearInputValues(props)}
            onClick={() => console.log("Button Props: ", props)}
          >
            Clear
          </Button>

          <DoubleCheckRemoveButton
            activeNote={props.activeNote}
            handelRemoveNote={props.removeExpense}
          />
        </ButtonGroup> */}

        <Button onClick={() => console.log("Show props: ", props)}>
          SHow Props
        </Button>
        <Button
          onClick={() => props.removeExpense({ id: props.activeNote[0].id })}
        >
          Remove
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
            <IconButton onClick={() => clearInputValues(props)} size="large">
              <ClearIcon fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item xs={11}>
            <TextField
              label="Titel"
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              color="secondary"
              fullWidth
              // inputProps={{
              //   style: {
              //     fontSize: 18,
              //   },
              // }}
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
              // select={true}
              // inputProps={{
              //   style: {
              //     fontSize: 18,
              //   },
              // }}
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
              // inputProps={{
              //   style: {
              //     fontSize: 18,
              //   },
              // }}
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
              // inputProps={{
              //   style: {
              //     fontSize: 18,
              //   },
              // }}
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
              // inputProps={{
              //   style: {
              //     fontSize: 18,
              //   },
              // }}
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

      {/* <Grid container item xs> */}
      {/* <TextField
          label="Note Description"
          variant="outlined"
          value={noteDecscription}
          onChange={(e) => setnoteDecscription(e.target.value)}
          margin="normal"
          color="secondary"
          minRows="6"
          multiline
          fullWidth
          // inputProps={{
          //   style: {
          //     fontSize: 16,
          //   },
          // }}
        /> */}
      {/* </Grid> */}
      <ReactQuill
        theme="snow"
        value={noteDecscription}
        onChange={setnoteDecscription}
        modules={modules}
        formats={formats}
      />

      {/* <ReactQuill theme="snow" value={noteDecscription}  onChange={(e) => setnoteDecscription(e.target.value)}/> */}
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

  /* {activeNoteID ? (
          <Button
            variant="contained"
            onClick={() =>
              handelTakeChanges(props, updates) + clearInputValues(props)
            }
          >
            take Changes
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() =>
              handelAddNote(props, updates) + clearInputValues(props)
            }
          >
            Direkt Add
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={() =>
            // handelTakeChanges(props, updates) + clearInputValues(props)
            statusChange(props, updates) + clearInputValues(props)
          }
        >
          Satus Changes
        </Button>

        <Button
          variant="outlined"
          // onClick={() => clearInputValues(props)}
          onClick={() => console.log("Button Props: ", props)}
        >
          Clear
        </Button>

        <DoubleCheckRemoveButton
          activeNote={props.activeNote}
          handelRemoveNote={props.removeExpense}
        />
      </ButtonGroup> */
}
