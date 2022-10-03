import * as actionTypes from "./constants";
export const addAction = () => ({
  type: actionTypes.ADD,
});

export const incrementAction = (num) => ({
  type: actionTypes.INCREMENT,
  payload: num,
});
