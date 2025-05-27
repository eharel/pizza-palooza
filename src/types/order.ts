import { CartItemData } from "./cart";

export enum OrderStatus {
  PENDING = "pending",
  PREPARING = "preparing",
  READY = "ready",
  DELIVERING = "delivering",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export interface OrderCreateData {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItemData[];
}

export interface OrderItemData {
  id: string;
  status: OrderStatus;
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
