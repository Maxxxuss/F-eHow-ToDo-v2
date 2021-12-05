const kanbanBoardReducerDefaultState = [];

const kanbanBoardReducer = (state = kanbanBoardReducerDefaultState, action) => {
  switch (action.type) {
    case "START_KSTORY":
      return [...state, action.storie];
    case "REMOVE_KSTORY":
      return state.filter(({ id }) => id !== action.id);

    case "ADD_KSTORY":
      return state.map((storie) => {
        if (storie.aNoteId === action.id) {
          return {
            ...storie,
            stories: [
              ...storie.stories,
              {
                ...action.updates,
              },
            ],
          };
        } else {
          return storie;
        }
      });
    // case "START_KSTORY":
    //   return state.map((storie) => {
    //     if (storie.id === action.id) {
    //       return {
    //         ...storie,
    //         kanbanboard: [
    //           ...storie.kanbanboard,
    //           {
    //             ...action.updates,
    //           },
    //         ],
    //       };
    //     } else {
    //       return storie;
    //     }
    //   });

    default:
      return state;
  }
};

export default kanbanBoardReducer;
