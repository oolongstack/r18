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

export default store;
