const buzwordReducerDefaultState = [];

const buzwordsReducer = (state = buzwordReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BUZWORD":
      return [...state, action.buzword];

    case "EDIT_BUZWORD":
      return state.map((buzword) => {
        if (buzword.id === action.id) {
          return {
            ...buzword,
            ...action.updates,
          };
        } else {
          return buzword;
        }
      });
    default:
      return state;
  }
};

export default buzwordsReducer;
