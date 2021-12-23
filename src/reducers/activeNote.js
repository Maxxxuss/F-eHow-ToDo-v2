const activeNoteReducerDefaultState = [];

const activeNoteReducer = (state = activeNoteReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ACTIVE_NOTE":
      return [...state, action.activeNote];
    case "REMOVE_ACTIVE_NOTE":
      return (state = []);

    case "EDIT_ACTIVE_NOTE":
      return {
        ...state,
        kanbanboard: {
          ...state.kanbanboard,
          tasks: {
            ...action.updates,
          },
        },
      };

    default:
      return state;
  }
};

export default activeNoteReducer;
