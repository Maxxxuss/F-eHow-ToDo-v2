import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.storieID} index={this.props.index}>
        {(provided, snapshot) => (
          <div

          >
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref ={provided.innerRef}
            isDragging={snapshot.isDragging}
            onClick={()=>console.log("Buttone Presssed: ", this.props.task) }

         
          >
            {this.props.task.titel}

          
          </Container>
          </div>
        )}
      </Draggable>
    );
  }
}
