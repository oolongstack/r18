import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPostsListAction = createAsyncThunk(
  "fetch/postsList",
  async () => {
    debugger;
    const res = await axios.request({
      url: "http://localhost:3004/posts/1",
    });
    return res.data;
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    count: 999,
    list: [],
  },
  reducers: {
    addNumber(state, { payload }) {
      state.count += payload;
    },
    subNumber(state, { payload }) {
      state.count -= payload;
    },
  },
  extraReducers: {
    [fetchPostsListAction.fulfilled](state, { payload }) {
      state.list = payload;
    },
  },
});

export const { addNumber, subNumber } = homeSlice.actions;

export default homeSlice.reducer;
