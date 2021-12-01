import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import styled from "styled-components";
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";
import { getkColumns } from "../../selectors/kColumns";
import { connect } from "react-redux";
import {
  getAllActiveNotes,
  getAllActiveNoteStories,
} from "../../selectors/activeNote";

import { Button, Grid } from "@mui/material";

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
    // const tasks = column.taskIds.map((taskId) => 
    // taskId === taskMap.map(task => task.id)
    // )
    // const tasks = column.taskIds.map((taskId)=>taskMap(taskId))
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);

    return <Column column={column} tasks={tasks} index={index} />;
  }
}

export function KanbanIndex(props) {
  const [task, setTask] = useState(props.kStories);

  // useEffect(()=>console.log("order Changed: ", order),[order])

  const [activeKanbanNote, setActiveKanbanNote] = useState("");
  
  const userStories = props.kStories[0]

  console.log("user Stories: ", userStories);

  useEffect(() => setActiveKanbanNote(props.activeNote.kanbanboard), [props]);

  useEffect(
    () => console.log("Kanban INDEX ActiveKanban Note:", activeKanbanNote),
    [props.activeNote]
  );

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
task.tasks.forEach(function(tasks) {
   arrResult[tasks.id] = tasks;
});

  return (
    <Grid>
      <DragDropContext 
      onDragEnd={onDragEnd}
      >
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
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        onClick={() =>
          console.log("Show Props - active Note:  ", props.kStories, task)
        }
      >
        Show Props
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    kColumns: getkColumns(state),
    activeNote: getAllActiveNotes(state),
    kStories: getAllActiveNoteStories(state),

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
  // setCategorie: (categorie) => dispatch(setCategorie(categorie)),
  // removeCategorie: (id) => dispatch(removeCategorie(id)),
  // editCategorie: (id, updates) => dispatch(editCategorie(id, updates)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  // addExpense: (expense) => dispatch(addExpense(expense)),
  // editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(mapStateToProps, null)(KanbanIndex);
