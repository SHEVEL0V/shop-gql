/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: ({ data }, { payload }) => {
      if (!data.find((el) => el._id === payload._id)) {
        data.push({ ...payload, qty: 1 });
      }
    },
    removeBasket: (state) => {
      state.data = [];
    },
    removeBasketEl: (state, { payload }) => {
      state.data = state.data.filter((el) => el._id !== payload._id);
    },
    incrementsQty: ({ data }, { payload }) => {
      const index = data.map((e) => e._id).indexOf(payload);

      data[index].qty += 1;
    },
    decrementsQty: ({ data }, { payload }) => {
      const index = data.map((e) => e._id).indexOf(payload);

      if (data[index].qty !== 1) {
        data[index].qty -= 1;
      }
    },
  },
});

export const {
  setBasket,
  removeBasket,
  removeBasketEl,
  incrementsQty,
  decrementsQty,
} = basketSlice.actions;

export default basketSlice.reducer;
