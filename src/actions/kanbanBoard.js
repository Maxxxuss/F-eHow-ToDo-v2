import { v4 as uuidv4 } from "uuid";

export const startStory = ({
  // export const startStory = ({noteId}) => ({
  id,
  aNoteId,
  titel,
  description,
  dastesToFinish,
  colID,
  stories,
  column,
} = {}) => ({
  type: "START_KSTORY",
  storie: {
    aNoteId,
    storieID: uuidv4(),
    titel,
    description,
    dastesToFinish,
    colID,
    stories,
    column,
  },
});

// REMOVE_KSTORY
export const removeStory = (sId ) => ({
  type: "REMOVE_KSTORY",
  sId,
});
// export const removeStory = ({ id } = {}) => {
//   return (dispatch) => {
//     dispatch(({
//       type: 'REMOVE_KSTORY',
//       id

//     }));
//   }
// }

// ADD_KSTORY
export const addStory = (updates) => ({
  type: "ADD_KSTORY",
  updates,
});

export const editUserStorie = (sId, updates) => ({
  type: "EDIT_KSTORY",
  sId,
  updates,
});

//   export const changeStatus = (id, updates) => ({
//     type: "CHANGE_STATUS",
//     id,
//     updates,
//   });
