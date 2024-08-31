import { configureStore } from "@reduxjs/toolkit";
import { cartState } from "./cartState";

export const store = configureStore({
  reducer: {
    cart: cartState.reducer,
  },
});

export const { addCartItem } = cartState.actions;
export default cartState.reducer;