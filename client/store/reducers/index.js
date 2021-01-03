import { combineReducers } from "redux";
import drawerReducer from "./drawer.reducer";
import menuReducer from "./menu.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import stepReducer from "./stepper.reducer";
import utilReducer from "./util.reducer";
import addressReducer from "./address.reducer";
import { LOG_OUT } from "../actions/user.action";
import store from "..";
import { fetchProducts } from "../actions/product.action";
import { setSideBarType } from "../actions/util.action";
import { sidebarTypes } from "../../libs/js/model";
const appReducer = combineReducers({
  drawerReducer,
  menuReducer,
  productReducer,
  userReducer,
  stepReducer,
  utilReducer,
  addressReducer,
});
export default function rootReducer(state, action) {
  if (action.type === LOG_OUT) {
    state = undefined;
    setTimeout(() => {
      store.dispatch(fetchProducts());
    }, 1000);
    setTimeout(() => {
      store.dispatch(setSideBarType({ sidebarType: sidebarTypes.categories }));
    }, 1000);
  }
  return appReducer(state, action);
}
