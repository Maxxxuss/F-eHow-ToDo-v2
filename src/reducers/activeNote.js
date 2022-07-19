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
      };

    case "EDIT_NOTE_STORY_ACTIVE_NOTE":
      return {
        ...state,
      };

    case "EDIT_ACtiVENOTE_BUZWORD":
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
