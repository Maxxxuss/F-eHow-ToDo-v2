import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { getkColumns } from "../../selectors/kColumns";
import { connect } from "react-redux";
import {
  getAllActiveNotes,
  getAllActiveNoteStories,
} from "../../selectors/activeNote";

import { Alert, Button, Grid, TextField } from "@mui/material";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";
import { addStory } from "../../actions/kanbanBoard";
// import { startStory, removeStory } from "../../actions/notes";
import { v4 as uuidv4 } from "uuid";
import { setActiveStory, removeActiveStory } from "../../actions/activeStorie";


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

    const tasks = column.taskIds.map((storieID) => taskMap[storieID]);

    return <Column column={column} tasks={tasks} index={index} props={this.props} />;
  }
}

export function KanbanIndex(props) {
  const [task, setTask] = useState(props.allStories[0]);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");

  const updates = {
    storieID: uuidv4(),
    noteId: props.activeNote[0].id,
    titel: titel,
    description: description,
    column: "column-2",
  };

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
        onClick={() => console.log("a Note Filter", task.columns, task)}
      >
        Show Props
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

      <Button
        onClick={()=>
          props.addStory(props.activeNote[0].id, updates)
        }
      >
        Add Story
      </Button>




    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    // kColumns: getkColumns(state),
    activeNote: getAllActiveNotes(state),
    // kStories: getAllActiveNoteStories(state),

    allStories: getAllgetKanbanBoard(state).noteIds.filter(
      (noteId) => noteId.noteId === getAllActiveNotes(state)[0].id
    ),

    activeUserStorie: getAllgetKanbanBoard(state)


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
  setActiveStory: ( updates) => dispatch(setActiveStory(updates)),
  removeActiveStory:()=> dispatch(removeActiveStory())


  // startStory: (id, updates) => dispatch(startStory(id, updates)),
  // removeStory: (id) => dispatch(removeStory(id)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  // editCategorie: (id, updates) => dispatch(editCategorie(id, updates)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanIndex);
