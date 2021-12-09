import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { connect } from "react-redux";
import { getAllActiveNotes } from "../../selectors/activeNote";

import { Button, Grid, TextField } from "@mui/material";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";
import {
  addStory,
  editUserStorie,
  removeStory,
} from "../../actions/kanbanBoard";
// import { startStory, removeStory } from "../../actions/notes";
import { v4 as uuidv4 } from "uuid";
import { setActiveStory, removeActiveStory } from "../../actions/activeStorie";
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

export function KanbanIndex(props) {
  // const props = properties.props;

  const [task, setTask] = useState(props.kanbanBoard);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [activeUserStorieID, setActiveUserStorieID] = useState("");

  useEffect(()=> setTask(props.kanbanBoard), [props.kanbanBoard])

  if (
    props.activeUserStorie != "" &&
    props.activeUserStorie[0].storieID != activeUserStorieID
  ) {
    setTitel(props.activeUserStorie[0].titel);
    setDescription(props.activeUserStorie[0].description);
    setActiveUserStorieID(props.activeUserStorie[0].storieID);
  }

  // useEffect(()=> task.map((column)=>
  //   { if (props.activeUserStorie[0].storieID === column.taskIds ) {
  //     console.log("Gefundene Column", column.id)

  //   }
  // })

  // ,[task])

  // useEffect(() => console.log("Taks Chend: ", task), [task]);

  const updates = {
    aNoteId: props.activeNote[0].id,
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

      console.log("OMN Drag End- Task", task);
      setTask({
        ...task,
        columnOrder: reorder(task.columnOrder, source.index, destination.index),
      });

      return;
      // (props.editUserStorie(activeUserStorieID, {
      //   ...task,
      //   columnOrder: reorder(task.columnOrder, source.index, destination.index),
      // }))
    }

    const home = task.columns[source.droppableId];
    const foreign = task.columns[destination.droppableId];

    if (home === foreign) {
      const newColumn = {
        ...home,
        taskIds: reorder(home.taskIds, source.index, destination.index),
      };
      console.log("OMN Drag End- Task", task);


      const newState = {
        ...task,
        columns: {
          ...task.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTask(newState);
      return;
      // ( props.editUserStorie(props.activeUserStorie[0].storieID, newState)
      // )
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
    // console.log("NWE State: ", {column: newForeign.id});
    props.editUserStorie(props.activeUserStorie[0].storieID,  {column: newForeign.id});
  };

  var arrResult = [];
  task.tasks.forEach(function (tasks) {
    arrResult[tasks.storieID] = tasks;
  });

  return (
    <Grid>
      <DragDropContext onDragEnd={onDragEnd} props={props}>
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
        onClick={() => console.log("props - Task: ", props)}
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
          props.editUserStorie(activeUserStorieID, updates)
        }
      >
        EDit Story
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={() =>
          // console.log("edit Props: ", activeUserStorieID)
          props.removeStory(props.activeUserStorie[0].storieID)
        }
      >
        Remove Story
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    kanbanBoard: getAllgetKanbanBoard(state),

    // kColumns: getkColumns(state),
    activeNote: getAllActiveNotes(state),
    // kStories: getAllActiveNoteStories(state),

    // kanbanBoard: getAllgetKanbanBoard(state).filter(
    //   (noteId) => noteId.aNoteId === getAllActiveNotes(state)[0].id
    // ),

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
  editUserStorie: (sId, updates) => dispatch(editUserStorie(sId, updates)),
  removeStory: (aNid, sId) => dispatch(removeStory(aNid, sId)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  // editCategorie: (id, updates) => dispatch(editCategorie(id, updates)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanIndex);
