import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers";
const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(
  createStore
);
export default createStoreWithMiddleWare(reducers);
//export default createStore(reducers, applyMiddleware(promiseMiddleware));
