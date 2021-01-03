export const FETCH_MENUS = "FETCH_MENUS";
export const ADD_MENU = "ADD_MENU";
export const EDIT_MENU = "EDIT_MENU";
export const UPDATE_MENU = "UPDATE_MENU";
export const DELETE_MENU = "DELETE_MENU";
export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
export default {
  FETCH_MENUS,
  ADD_MENU,
  EDIT_MENU,
  UPDATE_MENU,
  DELETE_MENU,
  SET_ACTIVE_MENU,
};

export function setActiveMenu(payload) {
  return {
    type: SET_ACTIVE_MENU,
    payload: payload,
  };
}
