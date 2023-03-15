import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categorySlice";
import authReducer from "../features/authSlice";
import { clothesSlice } from '../features/shopSlice'
import cartSlice from "../features/cartSlice";


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    clotnes: clothesSlice,
    authReducer,
    cart: cartSlice
  },
});
