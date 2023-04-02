/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
  basket: false,
  login: false,
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
  },
});

export const { setButtonMenu, setButtonBasket, setButtonLogin } =
  buttonSlice.actions;

export default buttonSlice.reducer;
