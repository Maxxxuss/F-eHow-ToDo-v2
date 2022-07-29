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
          };
        } else {
          return expense;
        }
      });

    case "EDIT_NOTE_STORY":
      return { ...expense };

    case "ADD_ACtiVENOTE_URL":
      // return  console.log("Notes reducer State ", state, action) 
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
            ...expense.linkTitel= action.updates.map((linkTitel) => {
              return linkTitel.linkTitel;
            }),
            ...expense.linkURL= action.updates.map((linkURL) => {
              return linkURL.linkTitel;
            })
          };
        } else {
          return expense;
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
