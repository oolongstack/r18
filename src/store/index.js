import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import homeReducer from "./home";
import aboutReducer from "./about";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    home: homeReducer,
    about: aboutReducer,
  }),
  composeEnhancers()
);

// monkey patch
// function log(store) {
//   const dispatch = store.dispatch;
//   function logAndDispatch(action) {
//     console.log("action: ", action);
//     dispatch(action);
//     console.log("派发结果: ", store.getState());
//   }
//   store.dispatch = logAndDispatch;
// }
// log(store);

function thunk(store) {
  const next = store.dispatch;
  function dispatchThunk(action) {
    if (typeof action === "function") {
      // 使用新的dispatch
      action(store.dispatch, store.getState);
      console.log("custom thunk");
    } else {
      next(action);
    }
  }
  store.dispatch = dispatchThunk;
}
thunk(store);
export default store;
