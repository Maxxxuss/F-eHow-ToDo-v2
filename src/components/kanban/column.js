import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./task";
import { Box, List, Paper, Grid } from "@mui/material";
import { FixedSizeList } from "react-window";
import { minHeight } from "@mui/system";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 2px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  &:hover {
    background-color: lightgrey;
  }
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.storieID} task={task} index={index} props={this.props} />
    ));
  }
}

export default function Column(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <Draggable draggableId={props.column.id} index={props.index}>
          {(provided, snapshot) => (
            <Paper
              ref={provided.innerRef}
              // isDragging={snapshot.isDragging}
              {...provided.draggableProps}
            >
              <Box
                sx={{
                  //   backgroundColor: 'primary.dark',
                  //   '&:hover': {
                  //     backgroundColor: 'primary.main',
                  //     opacity: [0.9, 0.8, 0.7]},
                  minWidth:"280px",
                  // height: "250px",
                }}
              >
              <Title
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
              >
                {props.column.title}
              </Title>
              </Box>
              <Box
                overflow="auto"
                sx={{
                  //   backgroundColor: 'primary.dark',
                  //   '&:hover': {
                  //     backgroundColor: 'primary.main',
                  //     opacity: [0.9, 0.8, 0.7]},
                  width:"100%",
                  height: "250px",
                }}
              >
                <Droppable droppableId={props.column.id} type="TASK">
                  {(provided, snapshot) => (
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                      <InnerList tasks={props.tasks} props={props} />
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
              </Box>
            </Paper>

            //   <Box
            //     sx={{
            //       // width: "300px"
            //       // autowith:true
            //     }}

            //     // itemSize={46}
            //     // itemCount={200}
            //     // overscanCount={5}
            //     // scroll="paper"
            //     // maxHeight={90}
            //     // overflow= 'auto'
            //   >
            //     {/* <Box
            //     // width={300}
            //     // height={200}
            //     // scrollbarSize	={100}
            //     // autoPageSize="true"

            //     ref={provided.innerRef}
            //     isDragging={snapshot.isDragging}
            //     {...provided.draggableProps}
            //     > */}

            //     <Paper
            //       ref={provided.innerRef}
            //       // isDragging={snapshot.isDragging}
            //       {...provided.draggableProps}
            //     >
            //       <Title
            //         {...provided.dragHandleProps}
            //         isDragging={snapshot.isDragging}
            //       >
            //         {props.column.title}
            //       </Title>
            //       <Box
            //         overflow="auto"
            //         sx={{
            //           //   backgroundColor: 'primary.dark',
            //           //   '&:hover': {
            //           //     backgroundColor: 'primary.main',
            //           //     opacity: [0.9, 0.8, 0.7]},
            //           // width: "100%",
            //           height: "250px",
            //         }}
            //       >
            //         <Droppable droppableId={props.column.id} type="TASK">
            //           {(provided, snapshot) => (
            //             <TaskList
            //               ref={provided.innerRef}
            //               {...provided.droppableProps}
            //               isDraggingOver={snapshot.isDraggingOver}
            //             >
            //               <InnerList tasks={props.tasks} props={props} />
            //               {provided.placeholder}
            //             </TaskList>
            //           )}
            //         </Droppable>
            //       </Box>
            //     </Paper>
            //   </Box>
          )}
        </Draggable>
      </Grid>
    </Grid>
  );
}

// export default class Column extends React.Component {
//   render() {
//     return (
//       <Draggable draggableId={this.props.column.id} index={this.props.index}>
//         {(provided, snapshot) => (
//           <Container
//           ref={provided.innerRef}
//             isDragging={snapshot.isDragging}
//             {...provided.draggableProps}
//           >
//             <Title
//               {...provided.dragHandleProps}
//               isDragging={snapshot.isDragging}
//             >
//               {this.props.column.title}
//             </Title>
//             <Droppable droppableId={this.props.column.id} type="TASK">
//               {(provided, snapshot) => (
//                 <TaskList
//                 ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   isDraggingOver={snapshot.isDraggingOver}
//                 >
//                   <InnerList tasks={this.props.tasks} />
//                   {provided.placeholder}
//                 </TaskList>
//               )}
//             </Droppable>
//           </Container>
//         )}
//       </Draggable>
//     );
//   }
// }
