export interface Cart {
  items: CartItem[];
  userId?: string;
}

// export interface CartItem {
//   pizza: Pizza;
//   quantity: number;
//   note?: string;

//   // We can derive totalPrice from pizza.unitPrice * quantity
//   // but sometimes it's useful to cache it for performance
//   totalPrice?: number;
// }

export interface CartItem {
  pizzaId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
