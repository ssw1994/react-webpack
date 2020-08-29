import { LOG_IN, LOG_OUT } from "../actions/user.action";
const initialState = {
  isLoggedIn: false,
  token: null,
  user: {
    username: "testUser",
    userId: "test",
  },
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return { ...state };
  }
}
