import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store/configureStore";
import { AppBar, Tabs, Tab, Box, Grid, Link, Typography } from "@mui/material";

import ImpExpData from "./ImpExpData";
import { getAllExpenses } from "../selectors/notes";
import ShortDescription from "./inputs/titel";
import {
  addActiveNote,
  addNoteStory_ActiveNote,
  editNoteStoryColumn_ActiveNote,
  editNoteStory_ActiveNote,
  removeActiveNote,
  editActiveNote,
} from "../actions/activeNote";
import { getAllActiveNotes } from "../selectors/activeNote";
import {
  addExpense,
  addNoteStory,
  editExpense,
  editExpenseBuzword,
  editNoteStory,
  removeExpense,
} from "../actions/notes";
import { setCategorie, removeCategorie } from "../actions/categorie";

import { addBuzword, editBuzword } from "../actions/buzwords";

import { SearchForNotes } from "./inputs/search";
import { getAllCategories } from "../selectors/categories";
import AddDeleteProject from "./AddDeleteProject";
import { getGlobalVariables } from "../selectors/autoSave";
import { editGlobalVariables } from "../actions/globalVariables";

import { setActiveStory, removeActiveUserStory } from "../actions/activeStorie";

import { getAllActiveUserStories } from "../selectors/activeStorie";
import { getAllBuzwords } from "../selectors/buzwords";

import { categorieCounter } from "./Counter/counter";

export function setActiveNote(expense, props) {
  //ALS PROPS MÜSSEN ÜBERGEBEN WERDEN (1) Add ActiveNote und RemoveActiveNote

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

      countNoteStories: expense.countNoteStories,
      buzwords: expense.buzwords,
      bTitel: expense.bTitel,
    };
    props.addActiveNote(updates);

    console.log("Active Notee: ", expense);

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
        label= {categorie.catName}
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

      <Box mt={2} mb={2} mr={2} ml={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ImpExpData props={props} />
          </Grid>

          <Grid item>
            <Typography variant="overline">
              Ideas or Support: ehow.todo.mn@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
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

    globalVariables: getGlobalVariables(state),
    //KanbanIndex
    activeUserStorie: getAllActiveUserStories(state),
    buzwords: getAllBuzwords(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  removeCategorie: (id) => dispatch(removeCategorie(id)),
  addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
  editActiveNote: (updates) => dispatch(editActiveNote(updates)),
  removeActiveNote: () => dispatch(removeActiveNote()),
  removeExpense: (id) => dispatch(removeExpense(id)),
  addExpense: (expense) => dispatch(addExpense(expense)),
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  editExpenseBuzword: (id, updates) =>
    dispatch(editExpenseBuzword(id, updates)),

  editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
  startStory: (id) => dispatch(startStory(id)),

  //KanbanIndex
  addStory: (id, updates) => dispatch(addStory(id, updates)),
  setActiveStory: (updates) => dispatch(setActiveStory(updates)),
  removeActiveUserStory: () => dispatch(removeActiveUserStory()),
  removeStory: (aNid, sId) => dispatch(removeStory(aNid, sId)),
  addNoteStory: (noteId, updates) => dispatch(addNoteStory(noteId, updates)),
  addNoteStory_ActiveNote: (noteId, updates) =>
    dispatch(addNoteStory_ActiveNote(noteId, updates)),
  editNoteStory: (noteId, userStorieID, updates) =>
    dispatch(editNoteStory(noteId, userStorieID, updates)),
  editNoteStory_ActiveNote: (noteId, userStorieID, updates) =>
    dispatch(editNoteStory_ActiveNote(noteId, userStorieID, updates)),

  editNoteStoryColumn_ActiveNote: (noteId, userStorieID, updates) =>
    dispatch(editNoteStoryColumn_ActiveNote(noteId, userStorieID, updates)),

  // BuzWords
  addBuzword: (buzword) => dispatch(addBuzword(buzword)),
  editBuzword: (id, updates) => dispatch(editBuzword(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesDashboardPage);
