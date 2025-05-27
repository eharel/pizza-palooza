import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { OrderItemData } from "../../types/order";

export async function orderLoader({
  params,
}: LoaderFunctionArgs): Promise<OrderItemData> {
  try {
    const id = params.id;
    if (!id) throw new Response("No order ID provided", { status: 404 });
    const order = await getOrder(id);
    return order;
  } catch (err) {
    if (err instanceof Response) throw err;
    throw new Response("Failed to load order", { status: 500 });
  }
}
