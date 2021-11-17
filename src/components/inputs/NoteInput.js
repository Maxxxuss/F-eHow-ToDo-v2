import {
  TextField,
  Autocomplete,
  Button,
  ButtonBase,
  Grid,
  Card,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  handelAddNote,
  handelRemoveNote,
  handelTakeChanges,
} from "../Button/AddNote";
import ClearIcon from "@mui/icons-material/Clear";
import DoubleCheckRemoveButton from "../Button/DoubleCheckRemoveButton";
import { connect } from "react-redux";
import { removeCategorie, setCategorie } from "../../actions/categorie";
import { addActiveNote, removeActiveNote } from "../../actions/activeNote";
import { addExpense, editExpense, removeExpense } from "../../actions/notes";
import { getAllActiveNotes } from "../../selectors/activeNote";
import { getAllExpenses } from "../../selectors/notes";
import { getAllCategories } from "../../selectors/categories";
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import RichEditorExample from "./TextEdit";
// import 'draft-js/dist/Draft.css';



// export function ShortDescription (props) {
//   console.log("Porps Shord DEs: ", props)

//   return(
//     <div>
//       "hello Shord Des"
//     </div>
//   )
// }

export  function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </div>
  );
}
const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
};

export function ShortDescription(props) {
  // const props = properties.NotesDashboradProps;
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

  // const [] = useState("")

  const space = "\n";
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

  if (props.activeNote != "" && props.activeNote[0].id != activeNoteID) {
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
    relevance: relevance,
    important: important,
    noteDecscription: space + timeStamp + space + noteDecscription,
    datesToFinish: datesToFinish,
    categorie: inputCategorie
      // ? inputCategorie
      // : props.activeNote != ""
      // ? props.activeNote[0].categorie
      // : props.activeCategorie.catName
      ,
    nextStep: nextStep,
    infoNote: infoNote,
    effort: effort,
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

  return (
    <div>
      <RichEditorExample/>


      {/* <Grid
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
        <Grid item xs={11}>
          <Autocomplete
            value={activeCategorie}
            onChange={(e, newValue) => {
              setActiveCategorie(newValue);
            }}
            // inputValue={
            //   inputCategorie
            //     ? inputCategorie
            //     : props.activeNote != ""
            //     ? props.activeNote[0].categorie
            //     : props.activeCategorie.catName
            // }
            onInputChange={(e, newInputValue) => {
              setInputCategorie(newInputValue);
            }}
            options={props.categories}
            getOptionLabel={(option) => (option.catName ? option.catName : "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Buzwords"
                variant="filled"
                color="secondary"
              />
            )}
          />
        </Grid>

        <Grid container item spacing={1}>
          <TextField
            label="Note Description"
            variant="outlined"
            value={noteDecscription}
            onChange={(e) => setnoteDecscription(e.target.value)}
            margin="normal"
            color="secondary"
            minRows="10"
            multiline
            fullWidth
            // inputProps={{
            //   style: {
            //     fontSize: 16,
            //   },
            // }}
          />
        </Grid>
      </Grid> */}
      <ButtonGroup color="primary" variant="text">
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
          onClick={() =>
            // handelTakeChanges(props, updates) + clearInputValues(props)
            statusChange(props, updates) + clearInputValues(props)
          }
        >
          Satus Changes
        </Button>

        <Button onClick={() => clearInputValues(props)}>Clear</Button>

        {/* <Button
          color="secondary"
          variant="contained"
          onClick={() =>
            handelRemoveNote(props, updates)
            
            + clearInputValues(props)
          }
        >
          Remove
        </Button> */}
        <DoubleCheckRemoveButton
          activeNote={props.activeNote}
          handelRemoveNote={props.removeExpense}
          // onSubmit={()=>clearInputValues(props)}
        />
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeNote: getAllActiveNotes(state),
    expenses: getAllExpenses(state).sort((a, b) => (a.prio > b.prio ? -1 : 1)),
    openExpenses: getAllExpenses(state)
      .sort((a, b) => (a.prio > b.prio ? -1 : 1))
      .filter((expense) => expense.noteStatus === "open"),
    categories: getAllCategories(state).sort((a, b) =>
      a.sorting > b.sorting ? 1 : -1
    ),

    //   historyCategorie: getHistorieCategorie(state),
      // globalVariables: getGlobalVariables(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  removeCategorie: (id) => dispatch(removeCategorie(id)),

  addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
  removeActiveNote: () => dispatch(removeActiveNote()),
  removeExpense: (id) => dispatch(removeExpense(id)),
  addExpense: (expense) => dispatch(addExpense(expense)),
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  // editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ShortDescription);
