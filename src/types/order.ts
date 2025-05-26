import { CartItemData } from "./cart";

export interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
  priority: boolean;
  pizzas: CartItemData[];
}
