import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers";
const createStoreWithMiddleWare = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);
export default createStoreWithMiddleWare(reducers);
//export default createStore(reducers, applyMiddleware(promiseMiddleware));
