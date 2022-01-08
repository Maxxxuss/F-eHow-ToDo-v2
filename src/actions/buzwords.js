import { v4 as uuidv4 } from "uuid";


// ADD BUZWORD

export const addBuzword = ({
    titel,
 
  } = {}) => ({
    type: "ADD_BUZWORD",
    buzword: {
      id: uuidv4(),
      titel,

     
      //   k_id: uuidv4(),
      //   k_titel,
      //   k_description,
      //   k_dastesToFinish,
      //   k_colID,
    },
  });

export const editBuzword = (id, updates) => ({
    type: "ADD_BUZWORD",
    id,
    updates,
  });