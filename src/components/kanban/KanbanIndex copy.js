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
  const [order, setOrder] = useState([
    "column-1",
    "column-2",
    // "column-3",
    // "column-4",
  ]);
  const [justColumns, setColumns] = useState(props.kStories.columns);

  const [activeKanbanNote, setActiveKanbanNote] = useState("");
  
  const userStories = props.kStories[0]

  console.log("user Stories: ", userStories);

  useEffect(() => setActiveKanbanNote(props.activeNote.kanbanboard), [props]);

  useEffect(
    () => console.log("Kanban INDEX ActiveKanban Note:", activeKanbanNote),
    [props.activeNote]
  );

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };


  var arrResult = [];
task.tasks.forEach(function(tasks) {
   arrResult[tasks.id] = tasks;
});

  return (
    <Grid>
      <DragDropContext 
      onDragEnd={(result) => onDragEnd(result, justColumns, setColumns)}
      >
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {order.map((columnId, index) => {
                const column = task.columns[columnId];
                console.log("Column :" , column, task);
                console.log("Adepted Index :" ,arrResult);


                const column2 = initialData.columns[columnId]
                console.log("Column2 :" , column2, initialData)


                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    index={index}
                    taskMap={arrResult}
                    // taskMap={props.kStories.tasks}
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        onClick={() =>
          console.log("Show Props - active Note:  ", props.kStories)
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
