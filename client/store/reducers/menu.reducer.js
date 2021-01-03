import {
  FETCH_MENUS,
  ADD_MENU,
  EDIT_MENU,
  DELETE_MENU,
  UPDATE_MENU,
  SET_ACTIVE_MENU,
} from "../actions/menu.action";

import routes from "../../libs/routes";
const initialState = {
  menus: routes,
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
    case SET_ACTIVE_MENU:
      const checkInnerMenu = (menu) => {
        menu.childrens.forEach((m) => {
          if (m.isActive) {
            m.isActive = false;
          }
          if (m.id === action.payload.id) {
            m.isActive = true;
          }
          if (m.childrens && m.childrens.length > 0) {
            checkInnerMenu(m);
          }
        });
      };
      return {
        ...state,
        menus: state.menus.map((menu) => {
          if (menu.isActive) {
            menu.isActive = false;
          }
          if (menu.id === action.payload.id) {
            menu.isActive = true;
          }
          if (menu.childrens && menu.childrens.length > 0) {
            checkInnerMenu(menu);
          }
          return menu;
        }),
      };
    default:
      return { ...state };
  }
}
