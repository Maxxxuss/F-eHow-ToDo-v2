import { v4 as uuidv4 } from "uuid";

export const addStory = ({
  // export const addStory = ({noteId}) => ({
  id,
  aNoteId,
  titel,
  description,
  dastesToFinish,
  colID,
  stories,
  column,
} = {}) => ({
  type: "ADD_KSTORY",
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

// EDIT_KSTORY
export const editStory = (id, updates) => ({
  type: "EDIT_KSTORY",
  id,
  updates,
});

//   export const changeStatus = (id, updates) => ({
//     type: "CHANGE_STATUS",
//     id,
//     updates,
//   });
