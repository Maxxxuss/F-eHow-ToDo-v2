import { createSelector } from "reselect"

export const getGlobalVariables = (state) => state.globalVariables 

export const getAllGlobalVariables = createSelector(getGlobalVariables,
    globalVariables => globalVariables.map(globalVariable => ({
        autoSave: globalVariable.autoSave ? globalVariable.autoSave : 2,
        onOffSwitch: globalVariable.onOffSwitch ? globalVariable.onOffSwitch : true, 

        counterDay: expense.counterDay ? expense.counterDay : 0,
        counterWeek: expense.counterWeek ? expense.counterWeek : 0,
        counterOneMonth: expense.counterOneMonth ? expense.counterOneMonth : 0,
        counterTwoMonth: expense.counterTwoMonth ? expense.counterTwoMonth : 0,
        counterThreeMonth: expense.counterThreeMonth ? expense.counterThreeMonth : 0,


    }))
)

    