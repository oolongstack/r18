import * as actionTypes from "./constants";
import axios from "axios";

export const getPostsListAction = (list) => {
  return {
    type: actionTypes.POSTS_LIST,
    payload: list,
  };
};

export const getPostsList = () => {
  return function (dispatch, getState) {
    axios
      .request({
        url: "http://localhost:3004/posts/1",
      })
      .then((res) => {
        dispatch(getPostsListAction(res.data.list));
      });
  };
};
