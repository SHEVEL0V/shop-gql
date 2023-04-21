/** @format */

import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import type { Params } from "@/types";

const initialState: Params = {
  desc: {
    types: [],
    brands: [],
    params: [],
    price: [],
  },
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
