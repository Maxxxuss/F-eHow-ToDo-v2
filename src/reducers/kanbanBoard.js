const kanbanBoardReducerDefaultState = [];

const kanbanBoardReducer = (state = kanbanBoardReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_KANBANSTORY':
          return [
            ...state,
            action.kanbanStory
          ];
        case 'REMOVE_KANBANSTORY':
          return state.filter(({ id }) => id !== action.id);
        case "EDIT_KANBANSTORY":
          return state.map((kanbanStory) => {
            if (kanbanStory.id === action.id) {
              return {
                ...kanbanStory,
                ...action.updates
              };
            } else {
              return kanbanStory;
            };
          });
          
        
        default:
          return state;
      }
    };

export default kanbanBoardReducer