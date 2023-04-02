/** @format */

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import button from "./button/slice";
import authSlice from "./auth/slice";
import basketSlice from "./basket/slice";
import optionsSlice from "./options/slice";

const auth = persistReducer({ key: "auth", storage }, authSlice);
const basket = persistReducer({ key: "basket", storage }, basketSlice);
const options = persistReducer({ key: "options", storage }, optionsSlice);

export const store = configureStore({
  reducer: {
    auth,
    basket,
    button,
    options,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
