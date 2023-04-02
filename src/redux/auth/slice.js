/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
  },
});

export const { setUser } = tokenSlice.actions;

export default tokenSlice.reducer;
