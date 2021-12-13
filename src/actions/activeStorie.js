
export const setActiveStory = ({
    // export const setActiveStory = ({noteId}) => ({
    id,
    collapse,
    
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
        collapse,
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
  export const removeActiveUserStory= () => ({
    type: "REMOVE_USTORY",
    activeUserStorie:""
  });