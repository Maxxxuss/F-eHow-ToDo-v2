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
    sID: uuidv4(),
    titel,
    description,
    dastesToFinish,
    colID,
    stories,
    column,
  },
});

// REMOVE_KSTORY
export const removeStory = ({ id } = {}) => ({
  type: "REMOVE_KSTORY",
  id,
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
export const addStory = (id, updates) => ({
  type: "ADD_KSTORY",
  id,
  updates,
});

//   export const changeStatus = (id, updates) => ({
//     type: "CHANGE_STATUS",
//     id,
//     updates,
//   });
