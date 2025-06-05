import { Order, OrderBase } from "../types/order";
import { Pizza } from "../types/pizza";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu(): Promise<Pizza[]> {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("An error occurred while fetching the menu");

  const { data } = await res.json();

  return data;
}

export async function getOrder(id: string): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) {
    throw new Response(`Couldn't find order #${id}`, {
      status: res.status,
      statusText: res.statusText || "Not Found",
    });
  }
  // if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(order: OrderBase): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("An error occurred");
    const { data } = await res.json();
    console.log("Returned created order", data);
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: string, updateObj: Order) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("An error occurred");
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
