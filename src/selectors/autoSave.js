import { createSelector } from "reselect";

export const getGlobalVariables = (state) => state.globalVariables;

export const getAllGlobalVariables = createSelector(
  getGlobalVariables,
  (globalVariables) =>
    globalVariables.map((globalVariable) => ({
      autoSave: globalVariable.autoSave ? globalVariable.autoSave : 2,
      onOffSwitch: globalVariable.onOffSwitch
        ? globalVariable.onOffSwitch
        : true,

      counterDay: globalVariable.counterDay ? globalVariable.counterDay : 0,
      counterWeek: globalVariable.counterWeek ? globalVariable.counterWeek : 0,
      counterOneMonth: globalVariable.counterOneMonth ? globalVariable.counterOneMonth : 0,
      counterTwoMonth: globalVariable.counterTwoMonth ? globalVariable.counterTwoMonth : 0,
      counterThreeMonth: globalVariable.counterThreeMonth
        ? globalVariable.counterThreeMonth
        : 0,
      task_current: taskCurrent(globalVariable.datesToFinish),
      task_tomorrow: 0,
      task_afert_Tomorrow: 0,
    }))
);

export function taskCurrent(absDatesToFinish) {}
