import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home";
import aboutReducer from "./about";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    home: homeReducer,
    about: aboutReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// monkey patch
function log(store) {
  const dispatch = store.dispatch;
  function logAndDispatch(action) {
    console.log("action: ", action);
    dispatch(action);
    console.log("派发结果: ", store.getState());
  }
  store.dispatch = logAndDispatch;
}
log(store);
export default store;
