import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import { getkColumns } from '../../selectors/kColumns';
import { connect } from 'react-redux';

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
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

export class KanbanIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    task:props.kColumns,
    // task: initialData
    };
  }   

  // showProps =()=>{
  //   console.log("Kanban Index Props:", this.state.kColumns);
  // }


  // state = initialData;

  onDragEnd = result => {
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

    if (type === 'COLUMN') {
      this.setState({
        ...this.state.task,
        columnOrder: reorder(
          this.state.task.columnOrder,
          source.index,
          destination.index,
        ),
      });
      return;
    }

    const home = this.state.task.columns[source.droppableId];
    const foreign = this.state.task.columns[destination.droppableId];

    if (home === foreign) {
      const newColumn = {
        ...home,
        taskIds: reorder(home.taskIds, source.index, destination.index),
      };

      const newState = {
        ...this.state.task,
        columns: {
          ...this.state.task.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
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
      ...this.state.task,
      columns: {
        ...this.state.task.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {provided => (
            <Container
              ref ={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.state.task.columnOrder.map((columnId, index) => {
                const column = this.state.task.columns[columnId];

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    index={index}
                    taskMap={this.state.task.tasks}
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}



const mapStateToProps = (state) => {
  return {

    kColumns: getkColumns(state)
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

export default connect(mapStateToProps, null )(KanbanIndex);
