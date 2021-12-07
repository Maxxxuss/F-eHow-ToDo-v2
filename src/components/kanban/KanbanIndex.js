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

const Container = styled.div`
  display: flex;
`;

const reorder = (array, startIndex, endIndex) => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;

    const tasks =
      column.taskIds === undefined
        ? []
        : column.taskIds.map((storieID) => taskMap[storieID]);

    return (
      <Column column={column} tasks={tasks} index={index} props={this.props} />
    );
  }
}
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

export function loader(props) {
  const kb = props.kanbanBoard;

  const sorted = {
    tasks: kb.map((storie) => ({
      storieID: storie.storieID ? storie.storieID : "",
      titel: storie.titel ? storie.titel : "",
      description: storie.description ? storie.description : "",
    })),
    columns: {
      "column-1": {
        id: "column-1",
        title: "Backlot",
        taskIds: group(kb, "column-1"),
      },
      "column-2": {
        id: "column-2",
        title: "To Do",
        taskIds: group(kb, "column-2"),
      },
      "column-3": {
        id: "column-3",
        title: "In Progress",
        taskIds: group(kb, "column-3"),
      },
      "column-4": {
        id: "column-4",
        title: "Done",
        taskIds: group(kb, "column-4"),
      },
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"],
  };

  console.log("Props: ", props);

  return <KanbanIndex props={props} sorted={sorted} />;
}

export function KanbanIndex(properties) {
  const props = properties.props;

  const [task, setTask] = useState(properties.sorted);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [activeUserStorieID, setActiveUserStorieID] = useState("");

  // if (props.activeUserStorie !="" && props.activeUserStorie[0].storieID != activeUserStorieID ) {
  //   setTitel(props.activeUserStorie[0].titel)
  //   setDescription(props.activeUserStorie[0].description)
  //   setActiveUserStorieID(props.activeUserStorie[0].storieID)
  // }

  // const updates = {
  //   storieID: uuidv4(),
  //   noteId: props.activeNote[0].id,
  //   titel: titel,
  //   description: description,
  //   column: "column-2",
  // };

  // const updatesEdit = {
  //   titel: titel,
  //   description: description,
  //   column: "column-2",
  // };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "COLUMN") {
      setTask({
        ...task,
        columnOrder: reorder(task.columnOrder, source.index, destination.index),
      });

      return;
    }

    const home = task.columns[source.droppableId];
    const foreign = task.columns[destination.droppableId];

    if (home === foreign) {
      const newColumn = {
        ...home,
        taskIds: reorder(home.taskIds, source.index, destination.index),
      };

      const newState = {
        ...task,
        columns: {
          ...task.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTask(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...task,
      columns: {
        ...task.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    setTask(newState);
  };

  var arrResult = [];
  task.tasks.forEach(function (tasks) {
    arrResult[tasks.storieID] = tasks;
  });

  return (
    <Grid>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {task.columnOrder.map((columnId, index) => {
                const column = task.columns[columnId];

                console.log("Column ", column);

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    index={index}
                    taskMap={arrResult}
                    props={props}
                    // taskMap={task.tasks}
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        variant="outlined"
        onClick={() => console.log("props - Task: ", properties)}
        // onClick={() => console.log("a Note Filter", props.activeUserStorie[0])}
      >
        Show Pro
      </Button>

      <TextField
        label="Story Titel"
        variant="filled"
        value={titel}
        onChange={(e) => setTitel(e.target.value)}
      ></TextField>

      <TextField
        label=" Description"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></TextField>

      <Button onClick={() => props.addStory(updates)}>Add Story</Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() =>
          // console.log("edit Props: ", props.activeNote[0].id, activeUserStorieID, updates)
          props.editUserStorie(
            props.activeNote[0].id,
            activeUserStorieID,
            updates
          )
        }
      >
        EDit Story
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={() =>
          // console.log("edit Props: ", activeUserStorieID)
          props.removeStory(
            props.activeNote[0].id,
            props.activeUserStorie[0].storieID
          )
        }
      >
        Remove Story
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    // kanbanBoard: getAllgetKanbanBoard(state),

    // kColumns: getkColumns(state),
    activeNote: getAllActiveNotes(state),
    // kStories: getAllActiveNoteStories(state),

    kanbanBoard: getAllgetKanbanBoard(state).noteIds.filter(
      (noteId) => noteId.aNoteId === getAllActiveNotes(state)[0].id
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

export default connect(mapStateToProps, mapDispatchToProps)(loader);
