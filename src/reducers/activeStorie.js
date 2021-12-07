const activeUserStorieReducerDefaultState = [];

const activeUserStorieReducer = (state = activeUserStorieReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USTORY':
      return [
        ...state,
        action.activeUserStorie
      ];
    case 'REMOVE_USTORY':
      // return (state={})=>state;
      return state=[]

      // return [
        //   ...state,
        //   action.activeNote
      // ];
  //   case 'EDIT_USTORY':
  //     return state.map((activeNote) => {
  //       if (activeNote.id === action.id) {
  //         return {
  //           ...activeNote,
  //           ...action.updates
  //         };
  //       } else {
  //         return activeNote;
  //       };
  //     });
    default:
      return state;
  }
};

export default activeUserStorieReducer