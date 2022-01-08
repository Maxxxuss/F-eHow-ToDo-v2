// Show if not Committet cahnges

import {
  TextField,
  Autocomplete,
  Button,
  Grid,
  ButtonGroup,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../Button/DoubleCheckRemoveButton";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
import { autoSaveFunc } from "./autoSave";
import { getAllActiveNotes } from "../../selectors/activeNote";
import { connect } from "react-redux";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

import store from "../../store/configureStore";
import BuzwordTags from "../Buzwords/buzwords";
import { Box } from "@mui/system";

export const ShortDescription = (properties) => {
  const props = properties;
  const ndsProps = properties.NotesDashboradProps;
  const [activeNoteID, setActiveNoteID] = useState("");
  const [description, setDescription] = useState("");

  const [relevance, setrelevance] = useState("");
  const [important, setimportant] = useState("");
  const [noteDecscription, setnoteDecscription] = useState("");

  const [datesToFinish, setdatesToFinish] = useState("");
  const [nextStep, setnextStep] = useState("");
  const [infoNote, setinfoNote] = useState("");
  const [effort, seteffort] = useState("");
  const [noteStatus, setnoteStatus] = useState("");

  const [activeCategorie, setActiveCategorie] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  const [aNoteId, setaNoteId] = useState("");
  const [noteId, setNoteId] = useState("");
  const [aUserStorieID, setAUserStorieID] = useState("");
  const [counterNoteStories, setCounterNoteStories] = useState(0);
  const [storieClearer, setStorieClearer] = useState("");
  const [buttonHandler, setButtonHandler] = useState("AddNote");

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
    setStorieClearer("");
    setButtonHandler("AddNote");
  };

  const clearStorieInput = (ndsProps) => {
    console.log("Clearer: ", ndsProps);

    setDescription("");

    setnoteDecscription("");

    setStorieClearer("rfBoard");
    setButtonHandler("AddStorie");
  };

  useEffect(() => []);

  if (
    ndsProps.activeUserStorie.length > 0 &&
    ndsProps.activeUserStorie[0].collapse === false &&
    activeNoteID != ndsProps.activeNote.id
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
    setStorieClearer("rfBoard");
    setCounterNoteStories(ndsProps.activeNote.countNoteStories);
    setButtonHandler("EditNote");
  }

  if (
    ndsProps.activeUserStorie.length > 0 &&
    ndsProps.activeUserStorie[0].collapse === true &&
    storieClearer === "rfBoard"
  ) {
    setDescription("");
    setnoteDecscription("");
    setStorieClearer("rfStorie");
    setButtonHandler("AddStorie");
  }

  if (
    storieClearer === "rfStorie" &&
    ndsProps.activeUserStorie.length > 0 &&
    aUserStorieID != ndsProps.activeUserStorie[0].storieID
  ) {
    setDescription(ndsProps.activeUserStorie[0].titel);
    setnoteDecscription(ndsProps.activeUserStorie[0].description);
    setAUserStorieID(ndsProps.activeUserStorie[0].storieID);
    setButtonHandler("EditStorie");
  }

  const startNewNote = {
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    if (buttonHandler === "EditNote") {
      return (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            ndsProps.editExpense(ndsProps.activeNote.id, updates) &&
            ndsProps.editActiveNote(updates) &&
            clearInputValues(ndsProps)
          }
        >
          {ndsProps.activeNote.noteDecscription.replace(/<[^>]+>/g, "").length -
            1 !=
          noteDecscription.replace(/<[^>]+>/g, "").length ? (
            <PublishedWithChangesOutlinedIcon
              color="warning"
              fontSize="medium"
              sx={{
                mr: 2,
              }}
            />
          ) : (
            ""
          )}
          Edit Note
        </Button>
      );
    }

    if (buttonHandler === "AddStorie")
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            ndsProps.addNoteStory_ActiveNote(activeNoteID, kanbanUpdates),
              ndsProps.addNoteStory(activeNoteID, kanbanUpdates),
              ndsProps.editExpense(ndsProps.activeNote.id, {
                countNoteStories: counterNoteStories + 1,
              }),
              setCounterNoteStories(counterNoteStories + 1),
              clearStorieInput(ndsProps);
          }}
        >
          Add Story
        </Button>
      );

    if (buttonHandler === "EditStorie")
      return (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            ndsProps.editNoteStory(
              activeNoteID,
              ndsProps.activeUserStorie[0].storieID,
              updateStorie
            ) &&
            ndsProps.editNoteStory_ActiveNote(
              activeNoteID,
              ndsProps.activeUserStorie[0].storieID,
              updateStorie
            ) &&
            ndsProps.removeActiveUserStory() &&
            clearStorieInput(ndsProps)
          }
        >
          {ndsProps.activeUserStorie[0].description.replace(/<[^>]+>/g, "")
            .length -
            1 !=
          noteDecscription.replace(/<[^>]+>/g, "").length ? (
            <PublishedWithChangesOutlinedIcon
              color="warning"
              fontSize="medium"
              sx={{
                mr: 2,
              }}
            />
          ) : (
            ""
          )}
          Edit Story
        </Button>
      );
    else
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            ndsProps.addExpense(startNewNote) && clearInputValues(ndsProps)
          }
        >
          Add NOte
        </Button>
      );
  }

  function deciderClearInputValue(ndsProps) {
    if (buttonHandler === "EditStorie")
      return (
        <div>
          <IconButton
            onClick={() =>
              ndsProps.removeActiveUserStory() &&
              ndsProps.setActiveStory({
                aNoteId: "defauldID",
                storieID: "",
                noteId: "noteId",
                titel: "description",
                description: "noteDecscription",
                column: "column-1",
                collapse: "false",
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
    if (buttonHandler === "AddStorie")
      return (
        <div>
          <IconButton
            onClick={() => {
              setDescription(ndsProps.activeNote.description),
                setnoteDecscription(ndsProps.activeNote.noteDecscription),
                setrelevance(ndsProps.activeNote.relevance),
                setimportant(ndsProps.activeNote.important),
                setInputCategorie(ndsProps.activeNote.categorie),
                setdatesToFinish(ndsProps.activeNote.datesToFinish),
                setnextStep(ndsProps.activeNote.nextStep),
                setinfoNote(ndsProps.activeNote.infoNote),
                seteffort(ndsProps.activeNote.effort),
                setnoteStatus(ndsProps.activeNote.noteStatus),
                setStorieClearer(""),
                setCounterNoteStories(ndsProps.activeNote.countNoteStories),
                setButtonHandler("EditNote");
            }}
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

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid mt={1} mb={1}>
        <ButtonGroup fullWidth={true}>
          {decider(ndsProps)}

          {buttonHandler === "EditNote" ? (
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

          {buttonHandler === "EditNote" ? (
            <DoubleCheckRemoveButton
              activeNote={ndsProps.activeNote}
              handelRemoveNote={ndsProps.removeExpense}
            />
          ) : (
            ""
          )}
        </ButtonGroup>

        <Button onClick={() => console.log("SHOW Props: ", props)}>
          Props
        </Button>
      </Grid>

      <Grid
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
            />
          </Grid>
        </Grid>
        {storieClearer === "rfStorie" ? (
          ""
        ) : (
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
        )}
        <Grid item>
          <BuzwordTags 
          titelNdsProps ={properties}
          activeNoteID={activeNoteID}

          />
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                 <BuzwordTags 
          titelNdsProps ={properties}
          activeNoteID={activeNoteID}

          />
           
          
            </Box>
          </Modal>
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
    activeNote: getAllActiveNotes(state),
  };
};

export default connect(mapStateToProps, null)(ShortDescription);
