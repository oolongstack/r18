// import { ADD, INCREMENT } from "./constant";
import * as actionTypes from "./constants";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, count: state.count + 1 };
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
