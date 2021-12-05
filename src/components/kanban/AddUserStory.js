import { Button, TextField, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startStory, addStory, removeStory } from "../../actions/kanbanBoard";
import { v4 as uuidv4 } from "uuid";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";

export function AddUserStory(props) {
  const ndsProps = props.props;

  const [activeNote, setActiveNote] = useState(""); //activeNote[0]
  const [titel, setTitel] = useState("");
  const [column, cetColumn] = useState("column-3");

  //   useEffect(
  //     () =>
  //         setActiveNote(ndsProps.activeNote)
  //     //   console.log("Props fired", props),

  //     [props.props]
  //   );

  const activeNoteID =
    ndsProps.activeNote.length > 0 ? ndsProps.activeNote[0].id : "";

  const aActiveNote = ndsProps.activeNote.id ? ndsProps.activeNote.id : "";

  const str = JSON.stringify(activeNoteID);

  const updates = {
    aNoteId: activeNoteID,
    stories: [],
    // k_description: "",
    // k_dastesToFinish: "",
    // k_colID: "column-2",
  };

  const updates2 = {
    storieID: uuidv4(),
    noteId: activeNoteID,
    titel: titel,
    column: "column-2"
    // k_description: "",
    // k_dastesToFinish: "",
    // k_colID: "column-2",
  };

  // const updates = (aN) => {
  //   return aN
  // }

  return (
    <Grid>
      <TextField
        label="Add User Story - Titel"
        variant="filled"
        value={titel}
        onChange={(e) => setTitel(e.target.value)}
      />

      <Button
        onClick={() => {
          props.startStory(updates);
          // console.log("button Fired, Proops: ", [ JSON.stringify(activeNoteID), updates(activeNoteID)]);
          // console.log("Show Props: ", props, "Note ID: ", activeNoteID);
        }}
      >
        Start User Story
      </Button>

      <Button
        onClick={() => {
          props.addStory(activeNoteID, updates2);
        }}
      >
        ADD STORY
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          console.log("Props ADD USER SOTRY: ", props);
        }}
      >
        SHWo Props
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    allStories: getAllgetKanbanBoard(state),
    // activeNote: getAllActiveNotes(state),
    // expenses: getAllExpenses(state).sort((a, b) => (a.prio > b.prio ? -1 : 1)),
    // openExpenses: getAllExpenses(state)
    //   .sort((a, b) => (a.prio > b.prio ? -1 : 1))
    //   .filter((expense) => expense.noteStatus === "open"),
    // categories: getAllCategories(state).sort((a, b) =>
    //   a.sorting > b.sorting ? 1 : -1
    // ),

    // //   historyCategorie: getHistorieCategorie(state),
    //   globalVariables: getGlobalVariables(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startStory: (updates) => dispatch(startStory(updates)),
  // setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  addStory: (id, updates) => dispatch(addStory(id, updates)),

  removeStory: (id) => dispatch(removeStory(id)),

  // addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
  // removeActiveNote: () => dispatch(removeActiveNote()),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  // editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserStory);
