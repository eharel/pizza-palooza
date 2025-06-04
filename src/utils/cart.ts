import { CartItem } from "../types/cart";
import { DELIVERY_FEE, PRIORITY_MULTIPLIER } from "../constants/pricing";

export function getOrderPriceBreakdown(
  items: CartItem[],
  isPriority: boolean,
): {
  itemsTotal: number;
  priorityFee: number;
  deliveryFee: number;
  totalPrice: number;
} {
  const itemsTotal = getCartItemsTotal(items);

  const priorityFee = isPriority ? itemsTotal * PRIORITY_MULTIPLIER : 0;

  return {
    itemsTotal,
    priorityFee,
    deliveryFee: DELIVERY_FEE,
    totalPrice: itemsTotal + priorityFee + DELIVERY_FEE,
  };
}

export function getCartItemsTotal(items: CartItem[]) {
  return items.reduce((total, item) => {
    return total + item.unitPrice * item.quantity;
  }, 0);
}
