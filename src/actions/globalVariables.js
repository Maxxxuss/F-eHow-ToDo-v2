import { v4 as uuidv4 } from "uuid";

// ADD_GLOBALVARIABLES
export const addGlobalVariables = ({} = {}) => ({
  type: "ADD_GLOBALVARIABLES",
  globalVariables: {
    autoSave,
    onOffSwitch,
    dayCounter_current,
    dayCounter_one,
    dayCounter_tow,
     weekCounter,
    oneMonthCoutner,
    twoMonthCoutner,
    threeMonthCoutner,
    dateTime_current,
    dateTime_one,
    dateTime_tow,
    task_current, 
    task_tomorrow,
    task_afert_Tomorrow
  },
});

// REMOVE_GLOBALVARIABLES
// export const removeGlobalVariables = ({ id } = {}) => ({
//   type: "REMOVE_GLOBALVARIABLES",
//   id,
// });
// export const removeGlobalVariables = ({ id } = {}) => {
//   return (dispatch) => {
//     dispatch(({
//       type: 'REMOVE_GLOBALVARIABLES',
//       id

//     }));
//   }
// }

// EDIT_GLOBALVARIABLES
export const editGlobalVariables = (updates) => ({
  type: "EDIT_GLOBALVARIABLES",
  updates,
});

// EDIT_CounterVariables
export const editGlobalCounterVariables = (updates) => ({
  type: "EDIT_GLOBALCOUNTERVARIABLES",
  updates,
});

// export const changeStatus = (id, updates) => ({
//   type: "CHANGE_STATUS",
//   id,
//   updates,
// });
