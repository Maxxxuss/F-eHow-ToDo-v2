const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    case "EDIT_EXPENSE_BUZWORD":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
            bTitel: action.updates.buzwords.map((titel) => {
              return titel.titel;
            }),
          };
        } else {
          return expense;
        }
      });

    case "ADD_NOTE_STORY":
      return state.map((expense) => {
        if (expense.id === action.noteId) {
          return {
            ...expense,

            kanbanboard: {
              columns: convertArrayToObject(
                expense.kanbanboard.columnOrder.map((columnId) => {
                  const column = expense.kanbanboard.columns[columnId];

                  if (column.id === action.updates.column) {
                    return {
                      ...column,
                      taskIds: [...column.taskIds, action.updates.storieID],
                    };
                  } else {
                    column;
                  }
                  return column;
                })
              ),

              columnOrder: expense.kanbanboard.columnOrder,
              tasks: [
                ...expense.kanbanboard.tasks,
                {
                  ...action.updates,
                },
              ],
            },
          };
        } else {
          return expense;
        }
      });

    case "EDIT_NOTE_STORY":
      return state.map((expense) => {
        if (expense.id === action.noteId) {
          return {
            ...expense,
            kanbanboard: {
              columns: expense.kanbanboard.columns,

              columnOrder: expense.kanbanboard.columnOrder,
              tasks: [
                ...expense.kanbanboard.tasks.map((userStorie) => {
                  if (userStorie.storieID === action.userStorieID) {
                    return {
                      ...userStorie,
                      ...action.updates,
                    };
                  } else {
                    return { ...userStorie };
                  }
                }),
              ],
            },
          };
        } else {
          return { ...expense };
        }
      });

    default:
      return state;
  }
};

export default expensesReducer;

const convertArrayToObject = (columns, key = "id") => {
  const initialValue = {};

  return columns.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
