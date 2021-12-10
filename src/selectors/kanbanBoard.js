import { createSelector } from "reselect";
import { getActiveK, getActiveNotes, getAllActiveNotes } from "./activeNote";

// export const getKanbanBoard = (state) => state.kabanBoards.aNoteId.filter(getAllActiveNotes(state)[0].id)

// const getactiveNotes = (state) = getActiveNotes(state.activeNote)

export const getactiveNotes = (state) =>
  state.activeNote[0] != undefined ? state.activeNote[0].id : "7054f393-9cc1-460f-b8e7-eec9c007492a";

export const getKanbanBoard = (state) => state.kabanBoards;


export const getAllgetKanbanBoard = createSelector(
  getKanbanBoard,
  getactiveNotes,
  (
    kabanBoards,
    activeNote,
    kb = kabanBoards.filter((kbANote) => kbANote.aNoteId === activeNote)
  ) => ({
    // kanbanBoards.filter(activeNote[0].id) =>

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
      "column-2": {
        id: "column-2",
        title: "To Do",
        taskIds:
          group(kb, "column-2") === undefined ? [] : group(kb, "column-2"),
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
    columnOrder: ["column-1", "column-2", "column-3", "column-4"],
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
  // console.log(fKanban);

  return grouped.get(varCol);
}

// export const getAllgetKanbanBoard = createSelector(
//   getKanbanBoard,
//   (kabanBoards) => ({
//     noteIds: kabanBoards.map((noteId) => ({
//       aNoteId: noteId.aNoteId,
//       storieID: noteId.storieID ? noteId.storieID : "",
//       titel: noteId.titel ? noteId.titel : "",
//       description: noteId.description ? noteId.description : "",
//       column: noteId.column ? noteId.column : "",

//     })),
//   })
// );

//       tasks: noteId.map((storie) => ({
//         storieID: storie.storieID ? storie.storieID : "",
//         titel: storie.titel ? storie.titel : "",
//         description: storie.description ? storie.description : "",
//       })),

//       columns: {
//         "column-1": {
//           id: "column-1",
//           title: "Backlog",
//           taskIds: group(noteId.column, "column-1")
//             ? group(noteId.column, "column-1")
//             : [],
//         },
//         "column-2": {
//           id: "column-2",
//           title: "To Do",
//           taskIds: group(noteId.stories, "column-2")
//             ? group(noteId.stories, "column-2")
//             : [],
//         },
//         "column-3": {
//           id: "column-3",
//           title: "In Progress",
//           taskIds: group(noteId.stories, "column-3")
//             ? group(noteId.stories, "column-3")
//             : [],
//         },
//         "column-4": {
//           id: "column-4",
//           title: "Done",
//           taskIds: group(noteId.stories, "column-4")
//             ? group(noteId.stories, "column-4")
//             : [],
//         },

//       },
//       columnOrder: ["column-1", "column-2", "column-3", "column-4"],

//       columns: noteId.stories.map((storie) => ({
//         "column-1": {
//           id: "column-1",
//           title: "Backlog",
//           taskIds: group(storie, "column-1")
//           ? group(storie, "column-1")
//           : [],
//         },
//       "column-2": {
//         id: "column-2",
//         title: "To Do",
//         taskIds: group(storie, "column-2")
//         ? group(storie, "column-2")
//         : [],
//       },
//       "column-3": {
//         id: "column-3",
//         title: "In Progress",
//         taskIds: group(storie, "column-3")
//           ? group(storie, "column-3")
//           : [],
//       },
//       "column-4": {
//         id: "column-4",
//         title: "Done",
//         taskIds: group(storie, "column-4")
//           ? group(storie, "column-4")
//           : [],
//       },
//       })),
//     })),
//   })
// );

// function group(list, varCol) {
//   const grouped = groupBy(list, (pet) => pet.column);

//   function groupBy(list, keyGetter) {
//     const map = new Map();
//     list.forEach((item) => {
//       const key = keyGetter(item);
//       if (!map.has(key)) {
//         map.set(key, [item.storieID]);
//       } else {
//         map.get(key).push(item.storieID);
//       }
//     });
//     return map;
//   }

//   return grouped.get(varCol);
// }
