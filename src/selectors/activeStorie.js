import { createSelector } from "reselect"

export const getActiveUserStorie = (state) => state.activeUserStorie

export const getAllActiveUserStories = createSelector(getActiveUserStorie, (activeUserStorie)=>

activeUserStorie.map((aUserStorie)=>({
    id: aUserStorie.id ? aUserStorie.id: "",
    aNoteId: aUserStorie.aNoteId ? aUserStorie.aNoteId: "", 
    sID: aUserStorie.sID ? aUserStorie.sID: "", 
    titel: aUserStorie.titel ? aUserStorie.titel: "",
    description: aUserStorie.description ? aUserStorie.description: "",
    dastesToFinish: aUserStorie.dastesToFinish ? aUserStorie.dastesToFinish: "",
    colID: aUserStorie.colID ? aUserStorie.colID: "",
    stories: aUserStorie.stories ? aUserStorie.stories: "",
    column: aUserStorie.column ? aUserStorie.column: "",
    storieID: aUserStorie.storieID ? aUserStorie.storieID: "",
})))