// import { ADD, INCREMENT } from "./constant";
import * as actionTypes from "./constants";

const initialState = {
  list: [],
  count: 100,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POSTS_LIST:
      return { ...state, list: action.payload };
    case actionTypes.ADD_NUMBER:
      return { ...state, count: state.count + action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
