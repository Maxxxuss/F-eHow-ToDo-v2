// const globalVariablesDefaultState = {
//   autoSave: 1,
//   onOffSwitch: true,
//   // dayCounter:0,
//   // weekCounter:0,
//   // oneMonthCoutner:0,
//   // twoMonthCoutner:0,
//   // threeMonthCoutner:0,
// };

const globalVariablesDefaultState = {
  autoSave: 1,
  onOffSwitch: true,
  dayCounter:"",
  weekCounter:"",
  oneMonthCoutner:"",
  twoMonthCoutner:"",
  threeMonthCoutner:"",
};

const globalVariabels = (state = globalVariablesDefaultState, action) => {
  switch (action.type) {
    case "SET_GLOBALVARIABLES":
      return [...state, action.globalVariables];

    case "EDIT_GLOBALVARIABLES":
      return {
        ...state,
        ...action.updates,
      };

      case "EDIT_GLOBALCOUNTERVARIABLES":
        return {
          ...state,
          ...action.updates,
        };
  

    case "REMOVE_GLOBALVARIABLES":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default globalVariabels;
