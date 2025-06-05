// Test ID: IIDSAT
import { useLoaderData } from "react-router-dom";
import OrderSuccessHandler from "./OrderSuccessHandler";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { Order as OrderType, OrderStatus } from "../../types/order";
import LinkButton from "../../ui/Buttons/LinkButton";
import ItemDisplay from "../shared/ItemDisplay";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import { Pizza } from "../../types/pizza";

function Order() {
  const order = useLoaderData() as OrderType;
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    status,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  // Get status-specific color
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return "bg-stone-dark";
      case OrderStatus.PREPARING:
        return "bg-cheese-dark";
      case OrderStatus.READY:
        return "bg-green-500";
      case OrderStatus.DELIVERING:
        return "bg-blue-500";
      case OrderStatus.DELIVERED:
        return "bg-green-600";
      case OrderStatus.CANCELLED:
        return "bg-tomato";
      default:
        return "bg-stone-dark";
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>

      <h2 className="mb-6 mt-7 text-2xl font-bold">
        Order Status (#{order.id})
      </h2>

      <div className="space-y-8">
        {/* This component will clear the cart if we just created an order */}
        <OrderSuccessHandler />

        <div className="rounded-lg bg-stone-light/30 p-6">
          <h3 className="mb-3 text-xl font-semibold">Status</h3>

          <div className="mb-2">
            {priority && (
              <span className="mr-2 rounded-full bg-tomato px-3 py-1 text-sm font-bold text-white">
                PRIORITY
              </span>
            )}
            <span
              className={`rounded-full ${getStatusColor(status as OrderStatus)} px-3 py-1 text-sm font-bold text-white shadow-sm`}
            >
              {status.toUpperCase()}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-lg font-medium">
              {deliveryIn >= 0 ? (
                <span>
                  Only{" "}
                  <span className="font-bold text-primary">
                    {calcMinutesLeft(estimatedDelivery)}
                  </span>{" "}
                  minutes left 😃
                </span>
              ) : (
                <span className="font-medium">Order should have arrived</span>
              )}
            </p>
            <p className="text-sm text-stone-dark">
              (Estimated delivery: {formatDate(estimatedDelivery)})
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-stone-light/30 p-6">
          <h3 className="mb-3 text-xl font-semibold">Order Items</h3>

          {cart && cart.length > 0 ? (
            <ul className="mb-4 divide-y divide-stone-light">
              {cart.map((item) => (
                <ItemDisplay
                  key={item.pizzaId}
                  item={item}
                  interactive={false}
                  isLoadingIngredients={fetcher.state === "loading"}
                  ingredients={
                    fetcher.data?.find(
                      (pizza: Pizza) => pizza.id === item.pizzaId,
                    )?.ingredients
                  }
                />
              ))}
            </ul>
          ) : (
            <p className="italic text-stone-dark">
              No items found in this order
            </p>
          )}
        </div>

        <div className="rounded-lg bg-stone-light/30 p-6">
          <h3 className="mb-3 text-xl font-semibold">Price Details</h3>

          <div className="space-y-2">
            <p className="flex items-center justify-between text-sm font-medium">
              <span>Pizza:</span>
              <span>{formatCurrency(orderPrice)}</span>
            </p>

            {priority && (
              <p className="flex items-center justify-between text-sm font-medium">
                <span>Priority fee:</span>
                <span>{formatCurrency(priorityPrice)}</span>
              </p>
            )}

            <p className="flex items-center justify-between border-t border-stone pt-2 text-lg font-bold">
              <span>To pay on delivery:</span>
              <span>{formatCurrency(orderPrice + priorityPrice)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
