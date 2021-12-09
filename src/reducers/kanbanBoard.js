const kanbanBoardReducerDefaultState = [];

const kanbanBoardReducer = (state = kanbanBoardReducerDefaultState, action) => {
  switch (action.type) {
    case "START_KSTORY":
      return [...state, action.storie];
    // case "REMOVE_KSTORY":
    //   return state.filter(({ id }) => id !== action.id);

    // case "ADD_KSTORY":
    //   return state.map((storie) => {
    //     if (storie.aNoteId === action.id) {
    //       return {
    //         ...storie,
    //         stories: [
    //           ...storie.stories,
    //           {
    //             ...action.updates,
    //           },
    //         ],
    //       };
    //     } else {
    //       return storie;
    //     }
    //   });

     case "ADD_KSTORY":
      return [...state, action.updates];

    

      case "REMOVE_KSTORY":
        return state.filter(({ storieID }) => storieID !== action.sId);



    case "EDIT_KSTORY":

      return state.map((storie) => {
        if (storie.storieID === action.sId) {
          return {
            ...storie,
            ...action.updates,
          };
        } else {
          return storie;
        }
      });


    default:
      return state;
  }
};

export default kanbanBoardReducer;
