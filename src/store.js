import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import itemReducer from "./features/itemSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    items: itemReducer,
  },
});

export default store;
