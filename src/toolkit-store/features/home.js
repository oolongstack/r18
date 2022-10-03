import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    count: 999,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.count += payload;
    },
    subNumber(state, { payload }) {
      state.count -= payload;
    },
  },
});

export const { addNumber, subNumber } = homeSlice.actions;

export default homeSlice.reducer;
