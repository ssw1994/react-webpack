import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions/drawer.action";
const initialState = {
  opened: false,
  side: "left",
};
export default function drawer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, opened: true };
    case CLOSE_DRAWER:
      return { ...state, opened: false };
    default:
      return { ...state };
  }
}
