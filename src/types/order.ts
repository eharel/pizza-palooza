import { CartItemData } from "./cart";

export interface OrderItemData {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  pizzas: CartItemData[];
  estimatedDelivery: string;
  position: string;
  orderPrice: number;
  priorityPrice: number;
  cart: CartItemData[];
}
