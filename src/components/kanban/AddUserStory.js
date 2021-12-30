import { Button, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { startStory, addStory, removeStory } from "../../actions/kanbanBoard";
import { v4 as uuidv4 } from "uuid";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";

export function AddUserStory(props) {
  const ndsProps = props.props;

  const [titel, setTitel] = useState("");

  const activeNoteID =
    ndsProps.activeNote.length > 0 ? ndsProps.activeNote.id : "";

  const updates = {
    aNoteId: activeNoteID,
    storieID: uuidv4(),
    noteId: activeNoteID,
    titel: titel,
    column: "column-4",
  };

  const updates2 = {
    storieID: uuidv4(),
    noteId: activeNoteID,
    titel: titel,
    column: "column-2",
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
          props.addStory(updates);
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  startStory: (updates) => dispatch(startStory(updates)),
  addStory: (id, updates) => dispatch(addStory(id, updates)),
  removeStory: (id) => dispatch(removeStory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserStory);
