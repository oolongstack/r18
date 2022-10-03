import { createStore, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import homeReducer from "./home";
import aboutReducer from "./about";

import { applyMiddleware } from "./middleware";
import { log, thunk } from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    home: homeReducer,
    about: aboutReducer,
  }),
  composeEnhancers()
);

applyMiddleware(store, log, thunk);
export default store;
