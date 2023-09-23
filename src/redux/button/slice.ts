/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
  basket: false,
  login: false,
  theme: true,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setButtonMenu: (state) => {
      state.menu = !state.menu;
    },
    setButtonBasket: (state) => {
      state.basket = !state.basket;
    },
    setButtonLogin: (state) => {
      state.login = !state.login;
    },
    setButtonTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const {
  setButtonMenu,
  setButtonBasket,
  setButtonLogin,
  setButtonTheme,
} = buttonSlice.actions;

export default buttonSlice.reducer;
