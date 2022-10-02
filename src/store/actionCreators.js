import * as actionTypes from "./constant";

export const addAction = () => ({
  type: actionTypes.ADD,
});

export const incrementAction = (num) => ({
  type: actionTypes.INCREMENT,
  payload: num,
});
