import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store/configureStore";
import { AppBar, Tabs, Tab, Box, Grid, Link, Typography } from "@mui/material";

import ImpExpData from "./ImpExpData";
import { getAllExpenses } from "../selectors/notes";
import ShortDescription from "./inputs/titel";
import {
  addActiveNote,
  removeActiveNote,
  editActiveNote,
} from "../actions/activeNote";
import { getAllActiveNotes } from "../selectors/activeNote";
import {
  addExpense,
  editExpense,
  editExpenseBuzword,
  removeExpense,
} from "../actions/notes";
import { setCategorie, removeCategorie } from "../actions/categorie";

import { addBuzword, editBuzword } from "../actions/buzwords";

import { addNoteDoc, editNoteDoc } from "../actions/noteDoc";

import { SearchForNotes } from "./inputs/search";
import { getAllCategories } from "../selectors/categories";
import AddDeleteProject from "./AddDeleteProject";
import { getGlobalVariables } from "../selectors/autoSave";
import { editGlobalVariables } from "../actions/globalVariables";

import { getAllBuzwords } from "../selectors/buzwords";
import { getAllNoteDocs } from "../selectors/noteDoc";
// import { TabCategorie } from "./Categorie";

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

      buzwords: expense.buzwords,
      bTitel: expense.bTitel,
      // docCounter: expense.docCounter
    };
    props.addActiveNote(updates);
    console.log("Active Notee: ", expense);
  }
}

export function NotesDashboardPage(props) {
  // const [tabCategorie, setTabCategorie] = useState(0);
  // const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });
  const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });
  const [tabCategorie, setTabCategorie] = useState(0);

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
        onClick={() => {
          setActiveCategorie(categorie);
          // console.log("categorie Change: ", categorie)
        }}
      />
    ));

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        // py: 2,
      }}
    >
      <Box mt={2} mb={2} mr={2} ml={2}>
        <Grid container alignItems="row">
          <Grid item xs={2}>
            <Link
              href="/proDash"
              style={{
                // backgroundColor: "yellow",
                padding: "20",
              }}
            >
              Project Dashboard
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link
              href="/documentDash"
              style={{
                // backgroundColor: "yellow",
                padding: "20",
              }}
            >
              Document Dashboard
            </Link>
          </Grid>
        </Grid>
      </Box>

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
              {/* <TabCategorie
              categories = {props.categories}
              
              /> */}
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
            {/* <Box
            mr={2}
            sx={{
              // position:"fixed",
              position: "-webkit-sticky", 
              position:" sticky",
              top: 0,
              // bottom:2
          }} */}

            {/* > */}
            <ShortDescription
              NotesDashboradProps={props}
              activeCategorie={activeCategorie}
            />
            {/* </Box> */}
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
    buzwords: getAllBuzwords(state),
    noteDocs: getAllNoteDocs(state),
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

  // DEL
  startStory: (id) => dispatch(startStory(id)),

  // BuzWords
  addBuzword: (buzword) => dispatch(addBuzword(buzword)),
  editBuzword: (id, updates) => dispatch(editBuzword(id, updates)),
  addNoteDoc: (id, updates) => dispatch(addNoteDoc(id, updates)),

  //NoteDoc
  editNoteDoc: (id, updates) => dispatch(editNoteDoc(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesDashboardPage);
