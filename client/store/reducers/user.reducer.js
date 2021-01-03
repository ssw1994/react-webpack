import { LOG_IN, LOG_OUT, REGISTER_USER } from "../actions/user.action";
const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: null };
    case REGISTER_USER:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return { ...state };
  }
}
