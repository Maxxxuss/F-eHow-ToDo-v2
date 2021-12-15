import { createSelector } from "reselect";

export const getactiveNotes = (state) =>
  state.activeNote[0] != undefined
    ? state.activeNote[0].id
    : "7054f393-9cc1-460f-b8e7-eec9c007492a";

export const getKanbanBoard = (state) => state.kabanBoards;

export const getAllgetKanbanBoard = createSelector(
  getKanbanBoard,
  getactiveNotes,
  (
    kabanBoards,
    activeNote,
    kb = kabanBoards.filter((kbANote) => kbANote.aNoteId === activeNote)
  ) => ({
    tasks: kb.map((storie) => ({
      aNoteId: storie.aNoteId ? storie.aNoteId : "",
      storieID: storie.storieID ? storie.storieID : "",
      titel: storie.titel ? storie.titel : "",
      description: storie.description ? storie.description : "",
    })),
    columns: {
      "column-1": {
        id: "column-1",
        title: "Backlock",
        taskIds:
          group(kb, "column-1") === undefined ? [] : group(kb, "column-1"),
      },

      "column-3": {
        id: "column-3",
        title: "In Progress",
        taskIds:
          group(kb, "column-3") === undefined ? [] : group(kb, "column-3"),
      },
      "column-4": {
        id: "column-4",
        title: "Done",
        taskIds:
          group(kb, "column-4") === undefined ? [] : group(kb, "column-4"),
      },
    },
    columnOrder: ["column-1", "column-3", "column-4"],
  })
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
