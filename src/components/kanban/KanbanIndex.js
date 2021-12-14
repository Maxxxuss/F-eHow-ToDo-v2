import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { connect } from "react-redux";
import { getAllActiveNotes } from "../../selectors/activeNote";

import {
  Box,
  Button,
  Collapse,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import { getAllgetKanbanBoard } from "../../selectors/kanbanBoard";
import {
  addStory,
  editUserStorie,
  removeStory,
} from "../../actions/kanbanBoard";
// import { startStory, removeStory } from "../../actions/notes";
import { v4 as uuidv4 } from "uuid";
import {
  setActiveStory,
  removeActiveUserStory,
} from "../../actions/activeStorie";
import { getAllActiveUserStories } from "../../selectors/activeStorie";
import KanbanEditor from "./kanbanEditor";

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

export function KanbanIndex(properties) {
  const props = properties.props;

  const [task, setTask] = useState(props.kanbanBoard);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [activeUserStorieID, setActiveUserStorieID] = useState("");
  const [aNoteId, setaNoteId] = useState("");

  const [noteId, setNoteId] = useState("");

  useEffect(() => setTask(props.kanbanBoard), [props.kanbanBoard]);

  if (
    props.activeUserStorie != "" &&
    props.activeUserStorie.length > 0 &&
    props.activeUserStorie[0].storieID != undefined &&
    props.activeUserStorie[0].storieID != activeUserStorieID
  ) {
    setTitel(props.activeUserStorie[0].titel);
    setDescription(props.activeUserStorie[0].description);
    setActiveUserStorieID(props.activeUserStorie[0].storieID);
  }

  if (props.activeNote.length > 0 && props.activeNote[0].id != aNoteId) {
    setaNoteId(props.activeNote[0].id);
    setNoteId(props.activeNote[0].id);
  }

  // const updates = {
  //   aNoteId: aNoteId,
  //   storieID: uuidv4(),
  //   noteId: noteId,
  //   titel: titel,
  //   description: description,
  //   column: "column-1",
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
      console.log("OMN Drag End- Task", task);
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
    props.editUserStorie(props.activeUserStorie[0].storieID, {
      column: newForeign.id,
    });
  };

  var arrResult = [];
  task.tasks.forEach(function (tasks) {
    arrResult[tasks.storieID] = tasks;
  });

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd} props={props}>
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
    </div>
  );
}

export function ColKanban(properties) {
  const [collapseCheck, setCollapseCheck] = useState(false);
  const [aNote, setaNote] = useState("");

  const props = properties.props.props;

  if (props.activeNote.length > 0 && props.activeNote[0].id != aNote) {
    setaNote(props.activeNote[0].id);
    setCollapseCheck(false);
  }
  if (props.activeNote.length === 0 && props.activeUserStorie[0].collapse === true && aNote != "") {
    setCollapseCheck(false);
    setaNote("");

  }


  useEffect(() => {
    props.removeActiveUserStory(),
      props.setActiveStory({
        collapse: collapseCheck,
      })
  }, [collapseCheck]);

  return (
    <Box
    mr={3}
    mb={1}
    >
      <Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
>

      <FormControlLabel
        control={
          <Switch
            checked={collapseCheck}
            onChange={() => setCollapseCheck(!collapseCheck)}
          />
        }
        label="Show - Stories"
        labelPlacement="start"
      />
      <div>
        <Collapse in={collapseCheck}>
          <KanbanIndex props={props} />
        </Collapse>
      </div>
      </Grid>
    </Box>
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
  removeActiveUserStory: () => dispatch(removeActiveUserStory()),
  editUserStorie: (sId, updates) => dispatch(editUserStorie(sId, updates)),
  removeStory: (aNid, sId) => dispatch(removeStory(aNid, sId)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  // editCategorie: (id, updates) => dispatch(editCategorie(id, updates)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColKanban);
