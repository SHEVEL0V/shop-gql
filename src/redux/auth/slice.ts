/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { User } from "@/types";

interface IState {
  token: string | null;
  user: User;
}

const initialState: IState = {
  token: null,
  user: {},
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = tokenSlice.actions;

export default tokenSlice.reducer;
