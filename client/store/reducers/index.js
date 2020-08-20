import { combineReducer } from "redux";
import drawerReducer from "./drawer.reducer";
import menuReducer from "./menu.reducer";
export default combineReducer({ drawerReducer, menuReducer });
