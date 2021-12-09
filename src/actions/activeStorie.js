
export const setActiveStory = ({
    // export const setActiveStory = ({noteId}) => ({
    id,
    
    aNoteId,
    titel,
    description,
    dastesToFinish,
    colID,
    stories,
    column,
    storieID,

  } = {}) => ({
    type: "SET_USTORY",
    activeUserStorie: {
        id,
      aNoteId, 
       
      titel,
      description,
      dastesToFinish,
      colID,
      stories,
      column,
      storieID,
    
    },
  });

  // EDIT_USTORY

  
  // REMOVE_USTORY
  export const removeActiveStory= () => ({
    type: "REMOVE_USTORY",
  });