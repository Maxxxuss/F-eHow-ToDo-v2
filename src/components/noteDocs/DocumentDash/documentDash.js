import { AppBar, Box, Grid, Link, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addNoteDoc, editNoteDoc, removeNoteDoc } from "../../../actions/noteDoc";
import { getAllCategories } from "../../../selectors/categories";
import { getAllNoteDocs } from "../../../selectors/noteDoc";
import { ShowDocumentDash } from "../ShowDocumentsDash";
import { getAllExpenses } from "../../../selectors/notes";

export function DocumentDash(props) {
  const [activeCategorie, setActiveCategorie] = useState({ catName: "ALL" });
  const [tabCategorie, setTabCategorie] = useState(0);

  const ProjectTab = (categories) =>
    categories.map((categorie, index) => (
      <Tab
        key={categorie.sorting ? categorie.sorting : index}
        label={categorie.catName}
        onClick={() =>
           setActiveCategorie(categorie)
          // console.log("categorie Change: ", categorie)
        }
      />
    ));

   

  return (
    <Box>
      <Box mt={2} mb={2} mr={2} ml={2}>
      <Link
        href="/"
        style={{
          // backgroundColor: "yellow",
          padding: "20",
        }}
      >
        Task Dashboard
      </Link>
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
          </Grid>
        </AppBar>
      </Box>

      {/* BODY  */}
      <Box 
      mt={2} mb={2} mr={2} ml={2}
      >
      <ShowDocumentDash
          props ={props}
          activeCategorie ={activeCategorie}
          removeNoteDoc={removeNoteDoc}
          editNoteDoc={editNoteDoc}
          
          /> 
        {/* <Grid container spacing={2} direction="row">
          <Grid item xs={7}> */}
            {/* Left Side - ShoW Notes & Filter */}
            {/* <SearchForNotes props={props} activeCategorie={activeCategorie} /> */}

          {/* <ShowDocumentDash
          props ={props}
          activeCategorie ={activeCategorie}
          removeNoteDoc={removeNoteDoc}
          editNoteDoc={editNoteDoc}
          
          />  */}

          {/* {ShowDocumentDash(props)} */}
          {/* </Grid> */}
          {/* RIGHT-SIDE - Note Details  */}
          {/* <Grid item xs> */}
            {/* <ShortDescription
              NotesDashboradProps={props}
              activeCategorie={activeCategorie}
            /> */}
          {/* </Grid> */}
        {/* </Grid> */}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    // activeNote: getAllActiveNotes(state),
    expenses: getAllExpenses(state), 
    // openExpenses: getAllExpenses(state)
    //   .sort((a, b) => (a.prio > b.prio ? -1 : 1))
    //   .filter((expense) => expense.noteStatus === "open"),
    categories: getAllCategories(state).sort((a, b) =>
      a.sorting > b.sorting ? 1 : -1
    ),

    // globalVariables: getGlobalVariables(state),
    // buzwords: getAllBuzwords(state),
    noteDocs: getAllNoteDocs(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
//   setCategorie: (categorie) => dispatch(setCategorie(categorie)),
//   removeCategorie: (id) => dispatch(removeCategorie(id)),
//   addActiveNote: (activeNote) => dispatch(addActiveNote(activeNote)),
//   editActiveNote: (updates) => dispatch(editActiveNote(updates)),
//   removeActiveNote: () => dispatch(removeActiveNote()),
  removeNoteDoc: (id) => dispatch(removeNoteDoc(id)),
  addNoteDoc: (expense) => dispatch(addNoteDoc(expense)),
  editNoteDoc: (id, updates) => dispatch(editNoteDoc(id, updates)),
//   editExpenseBuzword: (id, updates) =>
//     dispatch(editExpenseBuzword(id, updates)),

//   editGlobalVariables: (autoSave) => dispatch(editGlobalVariables(autoSave)),
//   startStory: (id) => dispatch(startStory(id)),

//   // BuzWords
//   addBuzword: (buzword) => dispatch(addBuzword(buzword)),
//   editBuzword: (id, updates) => dispatch(editBuzword(id, updates)),
//   addNoteDoc: (id, updates) => dispatch(addNoteDoc(id, updates)),




});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDash);

