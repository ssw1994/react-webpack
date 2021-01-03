import { showHideFooter } from "./util.action";
import store from "../../store";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const REGISTER_USER = "REGISTER_USER";

/// Mock API call

export function login(payload) {
  return {
    type: LOG_IN,
    payload,
  };
}

export function logout(payload) {
  return {
    type: LOG_OUT,
    payload,
  };
}

export function register(payload) {
  return {
    type: REGISTER_USER,
    payload: payload,
  };
}
