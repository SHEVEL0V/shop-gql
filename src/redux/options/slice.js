/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desc: {},
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setDesc: (state, { payload }) => {
      state.desc = payload;
    },
  },
});

export const { setDesc } = optionsSlice.actions;

export default optionsSlice.reducer;
