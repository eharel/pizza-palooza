import { createSlice } from "@reduxjs/toolkit";
import { Cart, CartItemData } from "../../types/cart";
import { Pizza } from "../../types/pizza";

const initialState: Cart = {
  items: [] as CartItemData[],
};

// ✅ Helper function
const increaseItemQuantity = (item: CartItemData) => {
  item.quantity++;
  item.totalPrice = item.quantity * item.pizza.unitPrice;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find(
        (item) => item.pizza.id === action.payload.id,
      );
      if (item) {
        increaseItemQuantity(item);
      } else {
        const newCartItem = {
          pizza: action.payload as Pizza,
          quantity: 1,
          totalPrice: action.payload.unitPrice,
        };

        state.items.push(newCartItem);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.pizza.id !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.pizza.id === action.payload);
      if (item) {
        increaseItemQuantity(item);
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

// Selectors
export const selectCartItems = (state: { cart: Cart }) => state.cart.items;

export const selectCartTotalPrice = (state: { cart: Cart }) => {
  return state.cart.items.reduce((total, item) => {
    return total + (item.totalPrice || item.quantity * item.pizza.unitPrice);
  }, 0);
};

export const selectCartTotalItems = (state: { cart: Cart }) => {
  return state.cart.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
