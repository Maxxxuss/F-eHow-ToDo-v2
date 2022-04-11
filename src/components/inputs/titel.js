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
  Chip,
  Paper,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../Button/DoubleCheckRemoveButton";
// import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
import { autoSaveFunc } from "./autoSave";
import { getAllActiveNotes } from "../../selectors/activeNote";
import { connect } from "react-redux";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

import store from "../../store/configureStore";
import BuzwordTags from "../Buzwords/buzwords";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  InlineStyleControls,
  styleMap,
} from "./richTextEditor/InlineStyleControls";
import { BlockStyleControls } from "./richTextEditor/BlockStyleControls";
import ReactQuill from "react-quill";

import "./richTextEditor/index.css";
import DraftJsEditor from "./richTextEditor/index.js"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

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

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  // useEffect(() => []);

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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const richTextStyleMap = {
    "HIGHLIGHT-Y": {
      backgroundColor: "#fffe0d",
    },
    "HIGHLIGHT-G": {
      backgroundColor: "#ccff88",
    },
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
          onClick={() => {
            ndsProps.editExpense(ndsProps.activeNote.id, updates),
              ndsProps.editActiveNote(updates),
              clearInputValues(ndsProps),
              autoSaveFunc(ndsProps);
          }}
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
            autoSaveFunc(ndsProps);
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
          onClick={() => {
            ndsProps.editNoteStory(
              activeNoteID,
              ndsProps.activeUserStorie[0].storieID,
              updateStorie
            ),
              ndsProps.editNoteStory_ActiveNote(
                activeNoteID,
                ndsProps.activeUserStorie[0].storieID,
                updateStorie
              ),
              ndsProps.removeActiveUserStory(),
              clearStorieInput(ndsProps),
              autoSaveFunc(ndsProps);
          }}
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
          onClick={() => {
            ndsProps.addExpense(startNewNote),
              clearInputValues(ndsProps),
              autoSaveFunc(ndsProps);
          }}
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
            onClick={() => {
              ndsProps.removeActiveUserStory(),
                ndsProps.setActiveStory({
                  aNoteId: "defauldID",
                  storieID: "",
                  noteId: "noteId",
                  titel: "description",
                  description: "noteDecscription",
                  column: "column-1",
                  collapse: "false",
                }),
                clearStorieInput(ndsProps);
            }}
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

  function handleKeyDown_Categorie(e) {
    if (
      // e.key === 67 &&
      e.key === "c" &&
      e.metaKey
    ) {
      console.log("search");
      handleOpen();
    }
  }
  //MODAL STATE
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // draft-js
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onRichtTextChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  function onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"));
  }

  function onYellowHighlight() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT-Y"));
  }

  function onGreenHighlight() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT-G"));
  }

  function onRichtTextChange(editorState) {
    console.log(
      "content",
      editorState.getCurrentContent().getPlainText("\u0001")
    );
    setEditorState(editorState), 
    setnoteDecscription(editorState)
  }

  function toggleBlockType(blockType) {
    onRichtTextChange(RichUtils.toggleBlockType(editorState, blockType));
  }

  return (
    <div onKeyDown={handleKeyDown_Categorie}>
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
              Set Status: {noteStatus === "open" ? "close" : "open"}
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
        <Grid item xs={10}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "row",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.2,
              m: 0,
              width: "100%",
            }}
            component="ul"
          >
            {ndsProps.activeNote.buzwords.map((data) => {
              return (
                <ListItem key={data.id}>
                  <Chip label={data.titel} />
                </ListItem>
              );
            })}
          </Paper>

          <Button onClick={handleOpen}>Add Buzword</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <BuzwordTags
                titelNdsProps={properties}
                activeNoteID={activeNoteID}
              />
              <ChildModal
                propsBuzword={props.NotesDashboradProps.buzwords}
                addBuzword={props.NotesDashboradProps.addBuzword}
                editBuzword={props.NotesDashboradProps.editBuzword}
              />
            </Box>
          </Modal>
        </Grid>
      </Grid>
      <Grid>
        {/* <div> */}
         <div>
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          {/* <InlineStyleControls editorState={editorState} /> */}
        </div>

        <Editor
          handleKeyCommand={handleKeyCommand}
          customStyleMap={styleMap}
          editorState={editorState}
          onChange={onRichtTextChange}
          placeholder="Add your Note"
        /> 
        {/* <DraftJsEditor/> */}
      </Grid>

      {/* <ReactQuill
        theme="snow"
        value={noteDecscription}
        onChange={setnoteDecscription}
        modules={modules}
        formats={formats}
      /> */}
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

function ChildModal(props) {
  const [open, setOpen] = useState(false);
  const [activeBuz, setActiveBuz] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("");

  const [titel, setTitel] = useState("");

  const handleListItemClick = (buzword, props, event, index) => {
    setSelectedIndex(index);
    setActiveBuz(buzword, props.props);
    setTitel(buzword.titel);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="success" onClick={handleOpen}>
        Add & Edit Buzwords
      </Button>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box overflow="auto" sx={{ ...style, width: 900, maxHeight: 600 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <List>
                {props.propsBuzword.map((buzword, index) => {
                  return (
                    <Paper elevation={4} key={buzword.id}>
                      <ListItem key={buzword.id}>
                        <ListItemButton
                          dense={true}
                          selected={selectedIndex === index}
                          onClick={(event) =>
                            handleListItemClick(buzword, props, event, index)
                          }
                        >
                          <ListItemText
                            id={buzword.id}
                            primary={buzword.titel.substr(0, 30)}
                          ></ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </Paper>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={5} ml={1}>
              <Grid container direction="column">
                <Grid item xs={6}>
                  <TextField
                    label="Titel"
                    variant="filled"
                    color="secondary"
                    value={titel}
                    onChange={(e) => setTitel(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <ButtonGroup>
                    {activeBuz === "" ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          props.addBuzword({ titel: titel });
                          setTitel("");
                        }}
                      >
                        Add new Buz
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          props.editBuzword(activeBuz.id, { titel: titel });
                          setTitel("");
                          setActiveBuz("");

                          // console.log(activeBuz);
                        }}
                      >
                        Take Change
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        setTitel("");
                        setActiveBuz("");
                      }}
                    >
                      Clear
                    </Button>
                    <Button color="secondary" onClick={handleClose}>
                      Close Window
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

console.log(store.getState());

const mapStateToProps = (state) => {
  return {
    activeNote: getAllActiveNotes(state),
  };
};

export default connect(mapStateToProps, null)(ShortDescription);
