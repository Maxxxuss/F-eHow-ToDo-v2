import { v4 as uuidv4 } from "uuid";

// ADD BUZWORD

export const addBuzword = ({ titel } = {}) => ({
  type: "ADD_BUZWORD",
  buzword: {
    id: uuidv4(),
    titel,
  },
});

export const editBuzword = (id, updates) => ({
  type: "EDIT_BUZWORD",
  id,
  updates,
});
