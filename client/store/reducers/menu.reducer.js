import {
  FETCH_MENUS,
  ADD_MENU,
  EDIT_MENU,
  DELETE_MENU,
  UPDATE_MENU,
} from "../actions/menu.action";
const initialState = {
  menus: [],
  active: null,
  editMenu: null,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENUS:
      return { ...state, menus: action.payload.menus };
    case ADD_MENU:
      return { ...state, menus: [...state.menus, action.payload.menu] };
    case EDIT_MENU:
      return { ...state, editMenu: action.payload.menu };
    case DELETE_MENU:
      return {
        ...state,
        menus: [...state.menus.filter((x) => x.id != action.payload.menu.id)],
      };
    case UPDATE_MENU:
      return {
        ...state,
        menus: [...state.menus],
      };
    default:
      return { ...state };
  }
}
