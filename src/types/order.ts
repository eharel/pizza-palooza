import { CartItem } from "./cart";

export enum OrderStatus {
  PENDING = "pending",
  PREPARING = "preparing",
  READY = "ready",
  DELIVERING = "delivering",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

// Base shared properties between order form and final order
export interface OrderBase {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItem[]; // Name for API
}

// Complete order with server-generated data
export interface Order extends OrderBase {
  id: string;
  status: OrderStatus;
  estimatedDelivery: string;
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export type FieldError = "customer" | "phone" | "address";
export type FormErrors = Partial<Record<FieldError, string>>;
