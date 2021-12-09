import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 500px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 2px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  &:hover {
    background-color: lightgrey;
  }
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
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
      <Task key={task.storieID} task={task} index={index} props={this.props}/>
    ));
  }
}

export default function Column(props) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
        ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
        >
          <Title
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            {props.column.title}
          </Title>
          <Droppable droppableId={props.column.id} type="TASK">
            {(provided, snapshot) => (
              <TaskList
              ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tasks={props.tasks} props={props}/>
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  )
  
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
