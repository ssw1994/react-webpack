import utilService from "../../services/util.service";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";
export const SHOW_HIDE_HEADER_FOOTER = "SHOW_HIDE_HEADER_FOOTER";
export const SELECTED_CATEGORY = "SELECTED_CATEGORY";
export const SIDEBAR_TYPE = "SIDEBAR_TYPE";
export const SEND_MAIL = "SEND_MAIL";
export function updateAddress(payload) {
  return {
    type: UPDATE_ADDRESS,
    payload: payload,
  };
}

export function getAddress(payload) {
  return {
    type: GET_ADDRESS,
    payload: payload,
  };
}

export function showHideFooter(payload) {
  return {
    type: SHOW_HIDE_HEADER_FOOTER,
    payload: payload,
  };
}

export function selectedCategory(payload) {
  return {
    type: SELECTED_CATEGORY,
    payload,
  };
}

export function setSideBarType(payload) {
  return {
    type: SIDEBAR_TYPE,
    payload,
  };
}

export function sendMail(payload) {
  let request = utilService.sendMail(payload);
  return {
    type: SEND_MAIL,
    payload: request,
  };
}
