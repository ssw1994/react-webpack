import { combineReducers } from "redux";
import drawerReducer from "./drawer.reducer";
import menuReducer from "./menu.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import stepReducer from "./stepper.reducer";
export default combineReducers({
  drawerReducer,
  menuReducer,
  productReducer,
  userReducer,
  stepReducer,
});
