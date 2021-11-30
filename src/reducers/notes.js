

import { v4 as uuidv4 } from "uuid";

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
    case "ADD_KSTORY":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            kanbanboard: [
              ...expense.kanbanboard,
              {
                ...action.updates,
              },
            ],
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
