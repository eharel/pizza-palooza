import { createSlice } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/cart";
import { getCartItemsTotal } from "../../utils/cart";

const initialState: Cart = {
  items: [] as CartItem[],
};

// ✅ Helper function
const increaseItemQuantity = (item: CartItem) => {
  item.quantity++;
  item.totalPrice = item.quantity * item.unitPrice;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find(
        (item: CartItem) => item.pizzaId === action.payload.id,
      );
      if (item) {
        increaseItemQuantity(item);
      } else {
        const newCartItem: CartItem = {
          pizzaId: action.payload.id,
          name: action.payload.name,
          unitPrice: action.payload.unitPrice,
          quantity: 1,
          totalPrice: action.payload.unitPrice,
        };

        state.items.push(newCartItem);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item: CartItem) => item.pizzaId !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const item = state.items.find(
        (item: CartItem) => item.pizzaId === action.payload,
      );
      if (item) {
        increaseItemQuantity(item);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(
        (item: CartItem) => item.pizzaId === action.payload,
      );
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Selectors
export function selectCartItems() {
  return (state: { cart: Cart }) => state.cart.items;
}

export function selectPizza(id: number) {
  return (state: { cart: Cart }) =>
    state.cart.items.find((item: CartItem) => item.pizzaId === id);
}

export function selectPizzaQuantity(id: number) {
  return (state: { cart: Cart }) =>
    state.cart.items.find((item: CartItem) => item.pizzaId === id)?.quantity ??
    0;
}

export function selectCartTotalPrice() {
  return (state: { cart: Cart }) => getCartItemsTotal(state.cart.items);
}

export function selectCartTotalPizzaTypes() {
  return (state: { cart: Cart }) => state.cart.items.length;
}

export function selectCartTotalPizzaQuantity() {
  return (state: { cart: Cart }) =>
    state.cart.items.reduce((total: number, item: CartItem) => {
      return total + item.quantity;
    }, 0);
}

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
