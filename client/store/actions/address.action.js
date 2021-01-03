export const FETCH_ALL_ADDRESS = "FETCH_ALL_ADDRESS";
export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const SELECT_ADDRESS = "SELECT_ADDRESS";
export const SAVE_ADDRESS = "SAVE_ADDRESS";
export const DELETE_ADDRESS = "SAVE_ADDRESS";
import service from "../../services/address.service";
export function fetchAllAddress(payload) {
  const request = service.getAllAddress(payload);
  return {
    type: FETCH_ALL_ADDRESS,
    payload: request,
  };
}

export function selectAddress(payload) {
  return {
    type: SELECT_ADDRESS,
    payload: payload,
  };
}
