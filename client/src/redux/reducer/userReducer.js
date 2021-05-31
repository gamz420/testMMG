import initState from "../initState";

function userReducer(state = initState, action) {
  switch (action.type) {
    case "SAVE_MAIL":
      return {
        id: state.user?.id,
        shared: state.user.shared,
        email: action.mail,
      };
    case "SHARED":
      return {
        id: state.user.id,
        shared: true,
        email: state.user.email,
      };
    default:
      return state;
  }
}

export default userReducer;
