import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";

import { Box, Collapse, FormControlLabel, Grid, Switch } from "@mui/material";

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

export default function KanbanIndex(properties) {
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
    }
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
  if (
    props.activeNote.length === 0 &&
    props.activeUserStorie[0].collapse === true &&
    aNote != ""
  ) {
    setCollapseCheck(false);
    setaNote("");
  }

  useEffect(() => {
    props.removeActiveUserStory(),
      props.setActiveStory({
        collapse: collapseCheck,
      });
  }, [collapseCheck]);

  return (
    <Box mr={3} mb={1}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
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
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Collapse in={collapseCheck}>
          <KanbanIndex props={props} />
        </Collapse>
      </Grid>
    </Box>
  );
}
