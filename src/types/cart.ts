import { Pizza } from "./pizza";

export interface Cart {
  items: CartItemData[];
}

export interface CartItemData {
  pizza: Pizza;
  quantity: number;
  note?: string;

  // We can derive totalPrice from pizza.unitPrice * quantity
  // but sometimes it's useful to cache it for performance
  totalPrice?: number;
}
