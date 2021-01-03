import { FETCH_ALL_ADDRESS, SELECT_ADDRESS } from "../actions/address.action";
const initialState = {
  address: {
    data: [],
    isFetchig: false,
    error: null,
  },
  selectedAddress: null,
};

export default function addressReduer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ADDRESS:
      return { ...state, address: action.payload };
    case SELECT_ADDRESS:
      return { ...state, selectedAddress: action.payload };
    default:
      return { ...state };
  }
}
