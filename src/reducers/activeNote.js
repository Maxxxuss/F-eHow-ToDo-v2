const activeNoteReducerDefaultState = [];

const activeNoteReducer = (state = activeNoteReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ACTIVE_NOTE":
      return { ...action.activeNote };
    case "REMOVE_ACTIVE_NOTE":
      return (state = []);

    case "EDIT_ACTIVE_NOTE":
      return {
        ...state,
        ...action.updates,
      };

    case "ADD_NOTE_STORY_ACTIVE_NOTE":
      return {
        ...state,
        kanbanboard: {
          columns: convertArrayToObject(
            state.kanbanboard.columnOrder.map((columnId) => {
              const column = state.kanbanboard.columns[columnId];

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

          columnOrder: state.kanbanboard.columnOrder,
          tasks: [
            ...state.kanbanboard.tasks,
            {
              ...action.updates,
            },
          ],
        },
      };

    case "EDIT_NOTE_STORY_ACTIVE_NOTE":
      return {
        ...state,
        kanbanboard: {
          columns: state.kanbanboard.columns,

          columnOrder: state.kanbanboard.columnOrder,
          tasks: [
            ...state.kanbanboard.tasks.map((userStorie) => {
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

    default:
      return state;
  }
};

export default activeNoteReducer;

const convertArrayToObject = (columns, key = "id") => {
  const initialValue = {};

  return columns.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
