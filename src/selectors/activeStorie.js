import { createSelector } from "reselect";

export const getActiveUserStorie = (state) => state.activeUserStorie;

export const getAllActiveUserStories = createSelector(
  getActiveUserStorie,
  (activeUserStorie) =>
    activeUserStorie.map((aUserStorie) => ({
      id: aUserStorie.id ? aUserStorie.id : "",
      collapse: aUserStorie.collapse ? aUserStorie.collapse : false,

      aNoteId: aUserStorie.aNoteId ? aUserStorie.aNoteId : "",
      titel: aUserStorie.titel ? aUserStorie.titel : "",
      description: aUserStorie.description ? aUserStorie.description : "",
      dastesToFinish: aUserStorie.dastesToFinish
        ? aUserStorie.dastesToFinish
        : "",
      colID: aUserStorie.colID ? aUserStorie.colID : "",
      stories: aUserStorie.stories ? aUserStorie.stories : "",
      column: aUserStorie.column ? aUserStorie.column : "",
      storieID: aUserStorie.storieID ? aUserStorie.storieID : "",
    }))
);
