const activeUserStorieReducerDefaultState = [];

const activeUserStorieReducer = (
  state = activeUserStorieReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_USTORY":
      return [...state, action.activeUserStorie];
    case "REMOVE_USTORY":
      return (state = []);

    default:
      return state;
  }
};

export default activeUserStorieReducer;
