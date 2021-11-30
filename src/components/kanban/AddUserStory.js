import { Button, TextField, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addStory } from "../../actions/notes";
import { v4 as uuidv4 } from "uuid";

export function AddUserStory(props) {
  const ndsProps = props.props;

  const [activeNote, setActiveNote] = useState(""); //activeNote[0]
  const [titel, setTitel] = useState("");
  const [column, cetColumn] = useState("column-1");


  //   useEffect(
  //     () =>
  //         setActiveNote(ndsProps.activeNote)
  //     //   console.log("Props fired", props),

  //     [props.props]
  //   );

  const activeNoteID =
    ndsProps.activeNote.length > 0 ? ndsProps.activeNote[0].id : "";

  const updates = {
      k_id: uuidv4(),
      k_titel: titel,
      k_description: "",
      k_dastesToFinish: "",
      k_colID: "column-3",
    //   k_column:column

  };

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
          ndsProps.addStory(activeNoteID, updates);
          console.log("button Fired, Proops: ", activeNoteID);
        }}
      >
        Add User Story
      </Button>
    </Grid>
  );
}

// const mapStateToProps = (state) => {
//     return {
//       activeNote: getAllActiveNotes(state),
//       expenses: getAllExpenses(state).sort((a, b) => (a.prio > b.prio ? -1 : 1)),
//       openExpenses: getAllExpenses(state)
//         .sort((a, b) => (a.prio > b.prio ? -1 : 1))
//         .filter((expense) => expense.noteStatus === "open"),
//       categories: getAllCategories(state).sort((a, b) =>
//         a.sorting > b.sorting ? 1 : -1
//       ),

//       //   historyCategorie: getHistorieCategorie(state),
//         globalVariables: getGlobalVariables(state),
//     };
//   };

const mapDispatchToProps = (dispatch) => ({
  addStory: (id, updates) => dispatch(addStory(id, updates)),
  // setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),

  // addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
  // removeActiveNote: () => dispatch(removeActiveNote()),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  // editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
});

export default connect(null, mapDispatchToProps)(AddUserStory);
