// import { ADD, INCREMENT } from "./constant";
import * as actionTypes from "./constants";

const initialState = {
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POSTS_LIST:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
