import { createSelector } from "reselect";
import moment from "moment";

export const getExpenses = (state) => state.expenses;

export const getAllExpenses = createSelector(getExpenses, (expenses) =>
  expenses.map((expense) => ({
    id: expense.id,
    categorie: expense.categorie ? expense.categorie : "",
    noteUpdateDate: expense.noteUpdateDate ? expense.noteUpdateDate : "",
    noteStatus: expense.noteStatus ? expense.noteStatus : "open",
    description: expense.description ? expense.description : "",
    prio: calcPrioBySnooze(
      expense.snooze,
      expense.datesToFinish,
      expense.important,
      expense.relevance,
      expense.riskAuswirkung,
      expense.riskWahrscheinlichkeit,
      expense.effort ? expense.effort : "5"
    ),

    sRelevance:
      expense.priority * expense.relevance
        ? expense.priority * expense.relevance
        : "",
    relevance: expense.relevance ? expense.relevance : "",
    important: expense.important ? expense.important : "",
    noteDecscription: expense.noteDecscription ? expense.noteDecscription : "",
    datesToFinish: expense.datesToFinish
      ? expense.datesToFinish
      : moment().add(1, "days"),
    absDatesToFinish: absDatesToFin(expense.datesToFinish),
    nextStep: expense.nextStep ? expense.nextStep : "",
    riskAuswirkung: expense.riskAuswirkung ? expense.riskAuswirkung : "",
    riskWahrscheinlichkeit: expense.riskWahrscheinlichkeit
      ? expense.riskWahrscheinlichkeit
      : "",
    infoNote: expense.infoNote ? expense.infoNote : false,
    journalNote: expense.journalNote ? expense.journalNote : false,
    snooze: expense.snooze ? expense.snooze : false,
    onHold: expense.onHold ? expense.onHold : false,
    effort: expense.effort ? expense.effort : "5",
    countNoteStories: expense.countNoteStories ? expense.countNoteStories : 0,
    buzwords: expense.buzwords ? expense.buzwords : [],
    bTitel: expense.bTitel ? expense.bTitel : [],



    kanbanboard:
      expense.kanbanboard 
        ? {
            tasks: expense.kanbanboard.tasks
              ? expense.kanbanboard.tasks.map((storie) => ({
                  aNoteId: storie.aNoteId ? storie.aNoteId : "",
                  storieID: storie.storieID
                    ? storie.storieID
                    : "defaultStorieID",
                  titel: storie.titel ? storie.titel : "",
                  description: storie.description ? storie.description : "",
                }))
              : [],
            columns:  {
              "column-1": {
                id: "column-1",
                title: "Backlock",
                taskIds:
                  group(expense.kanbanboard.tasks, "column-1") === undefined
                    ? []
                    : group(expense.kanbanboard.tasks, "column-1"),
              },

              "column-3": {
                id: "column-3",
                title: "In Progress",
                taskIds:
                  group(expense.kanbanboard.tasks, "column-3") === undefined
                    ? []
                    : group(expense.kanbanboard.tasks, "column-3"),
              },
              "column-4": {
                id: "column-4",
                title: "Done",
                taskIds:
                  group(expense.kanbanboard.tasks, "column-4") === undefined
                    ? []
                    : group(expense.kanbanboard.tasks, "column-4"),
              },
            },
            columnOrder: ["column-1", "column-3", "column-4"],
          }
          : {
            tasks: [],
            columns: {
              "column-1": {
                id: "column-1",
                title: "Backlock",
                taskIds: [],
              },

              "column-3": {
                id: "column-3",
                title: "In Progress",
                taskIds: [],
              },
              "column-4": {
                id: "column-4",
                title: "Done",
                taskIds: [],
              },
            },
            columnOrder: ["column-1", "column-3", "column-4"],
          }
  }))
);

export function group(list, varCol) {
  const grouped = groupBy(list, (pet) => pet.column);

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      if (!map.has(key)) {
        map.set(key, [item.storieID]);
      } else {
        map.get(key).push(item.storieID);
      }
    });
    return map;
  }

  return grouped.get(varCol);
}

export function absDatesToFin(datesToFinish) {
  var b = moment();
  var a = datesToFinish;

  const difference = moment(a).diff(b);
  const days = moment.duration(difference).asDays();
  return days;
}

function calcPrioBySnooze(
  snooze,
  datesToFinish,
  important,
  relevance,
  riskAuswirkung,
  riskWahrscheinlichkeit,
  effort
) {
  var b = moment();
  var a = datesToFinish;

  const difference = moment(a).diff(b);
  const days = moment.duration(difference).asDays();

  if (snooze === true && days > 0.6) {
    return 1;
  } else {
    return calculatePrio(
      days,
      important,
      relevance,
      riskAuswirkung,
      riskWahrscheinlichkeit,
      effort
    );
  }
}

function calculatePrio(
  days,
  important,
  relevance,
  riskAuswirkung,
  riskWahrscheinlichkeit,
  effort
) {
  var rAuswi = parseInt(riskAuswirkung, 10) / 100;
  var rWahr = parseInt(riskWahrscheinlichkeit, 10) / 100;
  var calEffort = parseInt(effort, 10) / 10 + 1;

  var rpz = rAuswi * rWahr >= 0 ? rAuswi * rWahr * 1.2 : 1;

  var calc = important * relevance + important * 1.15;
  var faktor = Math.abs((3 - days) * 0.8) * calEffort;

  if (days <= 0) {
    return calc * faktor * rpz;
  }
  if (days < 1) {
    return calc * 1.3 * faktor * rpz;
  }
  if (days <= 2) {
    return calc * faktor * 1.5 * rpz;
  } else {
    return calc;
  }
}
