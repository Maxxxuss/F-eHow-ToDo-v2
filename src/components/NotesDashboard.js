import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store/configureStore";
import { AppBar, Tabs, Tab, Box, Grid, Link } from "@mui/material";

import ImpExpData from "./ImpExpData";
import { getAllExpenses } from "../selectors/notes";
import  ShortDescription  from "./inputs/titel";
import { addActiveNote, addNoteStory_ActiveNote, editNoteStoryColumn_ActiveNote, editNoteStory_ActiveNote, removeActiveNote } from "../actions/activeNote";
import { getAllActiveNotes } from "../selectors/activeNote";
import { addExpense, addNoteStory,  editExpense, editNoteStory, removeExpense } from "../actions/notes";
import { setCategorie, removeCategorie } from "../actions/categorie";

import { SearchForNotes } from "./inputs/search";
import { getAllCategories } from "../selectors/categories";
import AddDeleteProject from "./AddDeleteProject";
import { getGlobalVariables } from "../selectors/autoSave";
import { editGlobalVariables } from "../actions/globalVariables";

// import { addStory, editUserStorie, removeStory } from "../actions/kanbanBoard";
import { setActiveStory, removeActiveUserStory } from "../actions/activeStorie";
// import { getAllgetKanbanBoard } from "../selectors/kanbanBoard";
import { getAllActiveUserStories } from "../selectors/activeStorie";

export function setActiveNote(expense, props) {
  //ALS PROPS MÜSSEN ÜBERGEBEN WERDEN (1) Add ActiveNote und RemoveActiveNote
  // props.removeActiveNote();
  if (expense != "" && expense != null && expense != undefined) {
    const updates = {
      id: expense.id,
      description: expense.description,
      relevance: expense.relevance,
      important: expense.important,
      noteDecscription: expense.noteDecscription,
      datesToFinish: expense.datesToFinish,
      categorie: expense.categorie,
      nextStep: expense.nextStep,
      infoNote: expense.infoNote,
      effort: expense.effort,
      noteStatus: expense.noteStatus,
      kanbanboard: expense.kanbanboard,
      countNoteStories: expense.countNoteStories,
    };
    props.addActiveNote(updates);
    // props.removeActiveUserStory(); 
    // props.setActiveStory({collapse:false})
    console.log("Active Notee: ", updates);
  }
}

export function NotesDashboardPage(props) {
  const [tabCategorie, setTabCategorie] = useState(0);
  const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });

  if (props.categories.length < 1) {
    props.setCategorie({
      catName: "ALL",
      sorting: 1,
    });
  }

  const ProjectTab = (categories) =>
    categories.map((categorie, index) => (
      <Tab
        key={categorie.sorting ? categorie.sorting : index}
        label={categorie.catName}
        onClick={() => setActiveCategorie(categorie)}
      ></Tab>
    ));

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 8,
      }}
    >
      <Link
        href="/proDash"
        style={{
          backgroundColor: "yellow",
          padding: "20",
        }}
      >
        Project Dashboard
      </Link>
      <Box mt={2} mb={2} mr={2} ml={2}>
        <AppBar position="static" color="default">
          <Grid container alignItems="row">
            <Grid item xs={10}>
              <Tabs
                value={tabCategorie}
                onChange={(e, newValue) => setTabCategorie(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {ProjectTab(props.categories)}
              </Tabs>
            </Grid>
            <Grid item xs>
              <AddDeleteProject
                setCategorie={props.setCategorie}
                categories={props.categories}
              />
            </Grid>
          </Grid>
        </AppBar>
      </Box>
      {/* BODY  */}
      <Box mt={2} mb={2} mr={2} ml={2}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={7}>
            {/* Left Side - ShoW Notes & Filter */}
            <SearchForNotes props={props} activeCategorie={activeCategorie} />
          </Grid>
          {/* RIGHT-SIDE - Note Details  */}
          <Grid item xs>
            <ShortDescription
              NotesDashboradProps={props}
              activeCategorie={activeCategorie}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12}>
        <ImpExpData props={props} />
      </Grid>
    </Box>
  );
}
console.log(store.getState());

const mapStateToProps = (state) => {
  return {
    // noteStories: getAllActiveNoteStories(state),
    activeNote: getAllActiveNotes(state),
    expenses: getAllExpenses(state).sort((a, b) => (a.prio > b.prio ? -1 : 1)),
    openExpenses: getAllExpenses(state)
      .sort((a, b) => (a.prio > b.prio ? -1 : 1))
      .filter((expense) => expense.noteStatus === "open"),
    categories: getAllCategories(state).sort((a, b) =>
      a.sorting > b.sorting ? 1 : -1
    ),
    //   historyCategorie: getHistorieCategorie(state),
    globalVariables: getGlobalVariables(state),
    //KanbanIndex
    activeUserStorie: getAllActiveUserStories(state),
    // kanbanBoard: getAllgetKanbanBoard(state),
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
  editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
  startStory: (id) => dispatch(startStory(id)),

  //KanbanIndex
  addStory: (id, updates) => dispatch(addStory(id, updates)),
  setActiveStory: (updates) => dispatch(setActiveStory(updates)),
  removeActiveUserStory: () => dispatch(removeActiveUserStory()),
  removeStory: (aNid, sId) => dispatch(removeStory(aNid, sId)),
  addNoteStory: (noteId, updates) =>dispatch(addNoteStory(noteId, updates)),
  addNoteStory_ActiveNote: (noteId, updates) =>dispatch(addNoteStory_ActiveNote(noteId, updates)),
  editNoteStory: (noteId, userStorieID,updates) =>dispatch(editNoteStory(noteId, userStorieID,updates)),
  editNoteStory_ActiveNote: (noteId, userStorieID,updates) =>dispatch(editNoteStory_ActiveNote(noteId, userStorieID,updates)),

  editNoteStoryColumn_ActiveNote: (noteId, userStorieID,updates) =>dispatch(editNoteStoryColumn_ActiveNote(noteId, userStorieID,updates)),




});

export default connect(mapStateToProps, mapDispatchToProps)(NotesDashboardPage);
