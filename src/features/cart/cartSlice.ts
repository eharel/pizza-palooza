import { createSlice } from "@reduxjs/toolkit";
import { Cart, CartItemData } from "../../types/cart";

const initialState: Cart = {
  items: [] as CartItemData[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload as CartItemData);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.pizza.id !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.pizza.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.pizza.unitPrice;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.pizza.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.pizza.unitPrice;
      }
    },
    clearCart() {
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
