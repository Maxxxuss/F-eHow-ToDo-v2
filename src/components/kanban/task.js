import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export default function Task(props) {
  const [activeStorie, setActiveStory] = useState("");

  useEffect(
    () => console.log("Active story setted: ", activeStorie),
    [activeStorie]
  );

  const cprops = props.props.props.props.props;

  return (
    <Draggable draggableId={props.task.storieID} index={props.index}>
      {(provided, snapshot) => (
        <div>
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            onClick={
              () =>
                // console.log("PROPS TASK: ", cprops)
                // &&
                cprops.removeActiveStory()&&
               cprops.setActiveStory({
                 titel: props.task.titel,
                 description:props.task.description

               } )
            }
          >
            <p>{props.task.titel}</p>
            <p>{props.task.description}</p>
          </Container>
        </div>
      )}
    </Draggable>
  );
  // }
}
