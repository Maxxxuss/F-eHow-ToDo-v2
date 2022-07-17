

const globalVariablesDefaultState = {
  autoSave: 1,
  onOffSwitch: true,
  dayCounter_current:"",
  dayCounter_one:"",
  dayCounter_tow:"", 
   weekCounter:"",
  oneMonthCoutner:"",
  twoMonthCoutner:"",
  threeMonthCoutner:"",
  dateTime_current:"", 
  dateTime_one:"", 
  dateTime_tow:"", 
  task_current:"", 
  task_tomorrow:"",
  task_afert_Tomorrow:""


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
