import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { OrderItemData } from "../../types/order";

export async function orderLoader({
  params,
}: LoaderFunctionArgs): Promise<OrderItemData> {
  try {
    const id = params.id;
    if (!id) throw Error("No order ID provided");
    const order = await getOrder(id);
    return order;
  } catch (err) {
    throw new Response("Failed to load order", { status: 500 });
  }
}
