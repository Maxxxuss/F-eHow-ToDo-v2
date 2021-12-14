import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import {
  Paper,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export default function Task(props) {
  const [activeStorie, setActiveStory] = useState("");

  const cprops = props.props.props.props.props;

  useEffect(
    () => console.log("Active story setted: ", props),

    [activeStorie]
  );

  return (
    <Draggable draggableId={props.task.storieID} index={props.index}>
      {(provided, snapshot) => (
        <Paper elevation={5}>
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            onClick={() =>
              // console.log("PROPS TASK: ", props.task)
              // // &&
              cprops.removeActiveUserStory() &&



              cprops.setActiveStory({
                titel: props.task.titel,
                description: props.task.description,
                storieID: props.task.storieID,
              })
            }
          >
            <Box
              sx={{
                // background: 'primary.dark',
                "&:hover": {
                  color: "primary.main",
                },
                // opacity: [0.9, 0.8, 0.7]},
              }}
            >
              <ListItem key={props.task.storieID}>
                <ListItemText
                  id={props.task.storieID}
                  primary={props.task.titel}
                  secondary={props.task.description
                    .substr(0, 200)
                    .replace(/<[^>]+>/g, "")}
                ></ListItemText>
              </ListItem>
            </Box>
          </Container>
        </Paper>
      )}
    </Draggable>
  );
  // }
}
