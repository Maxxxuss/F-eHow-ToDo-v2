import { createSelector } from "reselect";

export const getKanbanBoard = (state) => state.kabanBoards;

export const getAllgetKanbanBoard = createSelector(getKanbanBoard, (kabanBoards) =>
  kabanBoards.map((kanbanBoard) => ({
    id: kanbanBoard.id ? kanbanBoard.id :"" ,
    notesID: kanbanBoard.notesID ? kanbanBoard.id :"" ,
    titel: kanbanBoard.titel ? kanbanBoard.id :"" ,
    description: kanbanBoard.description ? kanbanBoard.id :"" ,
    dastesToFinish: kanbanBoard.dastesToFinish ? kanbanBoard.id :"" ,
    colID: kanbanBoard.colID ? kanbanBoard.id :"" ,  
  }))
);
