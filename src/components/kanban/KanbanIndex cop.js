import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { getkColumns } from "../../selectors/kColumns";
import { connect } from "react-redux";
import { getAllActiveNotes } from "../../selectors/activeNote";

import { Alert, Button, Grid, TextField } from "@mui/material";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";
import {
  addStory,
  editUserStorie,
  removeStory,
} from "../../actions/kanbanBoard";
// import { startStory, removeStory } from "../../actions/notes";
import { v4 as uuidv4 } from "uuid";
import { setActiveStory, removeActiveStory } from "../../actions/activeStorie";
import activeUserStorieReducer from "../../reducers/activeStorie";
import { getAllActiveUserStories } from "../../selectors/activeStorie";

export function group(list, varCol) {
  const grouped = groupBy(list, (pet) => pet.column);

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      if (!map.has(key)) {
        map.set(key, [item.storieID]);
      } else {
        map.get(key).push(item.storieID);
      }
    });
    return map;
  }

  return grouped.get(varCol);
}

export function reOrderKanban(props) {
  const kb = props.kanbanBoard.noteIds;

  const sorted = {
    tasks: kb.map((storie) => ({
      storieID: storie.storieID ? storie.storieID : "",
      titel: storie.titel ? storie.titel : "",
      description: storie.description ? storie.description : "",
    })),
    columns :{
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: group(kb, "column-1")
      },
      "column-2": {
        id: "column-2",
        title: "To Do",
        taskIds: group(kb, "column-2")
      },
      "column-3": {
        id: "column-3",
        title: "To Do",
        taskIds: group(kb, "column-3")
      },
      "column-4": {
        id: "column-4",
        title: "To Do",
        taskIds: group(kb, "column-4")
      },
    }, 
     columnOrder: ["column-1", "column-2", "column-3", "column-4"]

    // },
  };


  

  // const columns = {

  //   columns: {
  //     "column-1": {
  //       id: "column-1",
  //       title: "Backlog",
  //       taskIds: kb.map((column) => {
  //         if (column.column === "column-1") {
  //           return column.storieID;
  //         }
  //         else return
  //       }),
  //     },
  //     "column-2": {
  //       id: "column-2",
  //       title: "Backlog",
  //       taskIds: kb.map((column) => {
  //         if (column.column === "column-2") {
  //           return column.storieID;
  //         }
  //         else return 
  //       }),
  //     },
 
  //     "column-3": {
  //       id: "column-3",
  //       title: "Backlog",
  //       taskIds: kb.map((column) => {
  //         if (column.column === "column-3") {
  //           return column.storieID;
  //         }
  //         else return 
  //       }),
  //     },
  //     "column-4": {
  //       id: "column-4",
  //       title: "Backlog",
  //       taskIds: kb.map((column) => {
  //         if (column.column === "column-4") {
  //           return column.storieID;
  //         }
  //         else return 
  //       }),
  //     },
  //   },
  // };



 


  console.log("REORDER KB : ", sorted);
  // console.log("REORDER KB : ", group(columns.columns , "column-2" ));
}

export function KanbanIndex(props) {
  return (
    <div>
      <Button onClick={() => console.log("SHOW Props", props)}>
        Show Props
      </Button>

      <Button
        onClick={() => {
          reOrderKanban(props),
            console.log("Props: ", props.kanbanBoard.noteIds);
        }}
      >
        re Order
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    kanbanBoard: getAllgetKanbanBoard(state),

    // kColumns: getkColumns(state),
    activeNote: getAllActiveNotes(state),
    // kStories: getAllActiveNoteStories(state),

    allStories: getAllgetKanbanBoard(state).noteIds.filter(
      (noteId) => noteId.noteId === getAllActiveNotes(state)[0].id
    ),

    activeUserStorie: getAllActiveUserStories(state),

    // categories: getAllCategories(state).sort((a, b) =>
    //   a.sorting > b.sorting ? 1 : -1
    // ),
    // journalExpenses: getAllExpenses(state)
    //   .sort((a, b) => (a.noteUpdateDate > b.noteUpdateDate ? -1 : 1))
    //   .filter((expense) => expense.journalNote === true),
    // historyCategorie: getHistorieCategorie(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addStory: (id, updates) => dispatch(addStory(id, updates)),
  setActiveStory: (updates) => dispatch(setActiveStory(updates)),
  removeActiveStory: () => dispatch(removeActiveStory()),
  editUserStorie: (activeNoteId, sId, updates) =>
    dispatch(editUserStorie(activeNoteId, sId, updates)),
  removeStory: (aNid, sId) => dispatch(removeStory(aNid, sId)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  // editCategorie: (id, updates) => dispatch(editCategorie(id, updates)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanIndex);
