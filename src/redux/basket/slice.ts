/** @format */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ItemBasket, Product } from "@/types";

export interface IState {
  data: ItemBasket[];
}

const initialState: IState = {
  data: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: ({ data }, action: PayloadAction<Product>) => {
      const { payload } = action;

      if (!data.map((el) => el?._id).includes(payload._id)) {
        data.push({ ...payload, qty: 1 });
      }
    },

    removeBasket: (state) => {
      state.data = [];
    },

    removeBasketEl: (state, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter((el) => el._id !== action.payload.id);
    },

    incrementsQty: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.data.map((el) => el._id).indexOf(action.payload.id);

      state.data[index].qty += 1;
    },

    decrementsQty: (state, action: PayloadAction<{ id: string }>) => {
      const { data } = state;
      const index = data.map((el) => el._id).indexOf(action.payload.id);

      data[index].qty > 1
        ? (data[index].qty -= 1)
        : (state.data = data.filter((el) => el._id !== action.payload.id));
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
