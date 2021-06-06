import {
  UPDATE_ADDRESS,
  SHOW_HIDE_HEADER_FOOTER,
  SELECTED_CATEGORY,
  SIDEBAR_TYPE,
  SEND_MAIL,
  SHOW_ALERT,
} from "../actions/util.action";

const initialState = {
  address: {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    zipCode: "",
    city: "",
    streetName: "",
    streetAddress: "",
    country: "",
    countryCode: "",
    state: "",
    latitude: "",
    longitude: "",
  },
  header: {
    show: true,
  },
  categories: [],
  sidebarType: null,
  mailStatus: null,
  alert: {
    show: false,
    config: null,
  },
};
export default function utilReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return { ...state, address: { ...state.address, ...action.payload } };
    case SHOW_HIDE_HEADER_FOOTER:
      return {
        ...state,
        header: { ...action.payload },
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case SIDEBAR_TYPE:
      return {
        ...state,
        sidebarType: action.payload.sidebarType,
      };
    case SEND_MAIL:
      return {
        ...state,
        mailStatus: action.payload,
      };

    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          config: state.payload,
        },
      };
    default:
      return { ...state };
  }
}
