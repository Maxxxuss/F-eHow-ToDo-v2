import { v4 as uuidv4 } from "uuid";

export const addStory = ({
  notesID,
  titel,
  description,
  dastesToFinish,
} = {}) => ({
  type: "ADD_KANBANSTORY",
  kanbanStory: {
    id: uuidv4(),
    notesID,
    titel,
    description,
    dastesToFinish,
    colID,  
  }
});

// REMOVE_KANBANSTORY
export const removeKanbanStory = ({ id } = {}) => ({
    type: "REMOVE_KANBANSTORY",
    id,
  });
  // export const removeKanbanStory = ({ id } = {}) => {
  //   return (dispatch) => {
  //     dispatch(({
  //       type: 'REMOVE_KANBANSTORY',
  //       id
  
  //     }));
  //   }
  // }
  
  // EDIT_KANBANSTORY
  export const editKanbanStory = (id, updates) => ({
    type: "EDIT_KANBANSTORY",
    id,
    updates,
  }
  );
  
//   export const changeStatus = (id, updates) => ({
//     type: "CHANGE_STATUS",
//     id,
//     updates,
//   });
  