import { Pizza } from "../../types/pizza";
import { getMenu } from "../../services/apiRestaurant";

export async function menuLoader(): Promise<Pizza[]> {
  try {
    const menu = await getMenu();
    return menu;
  } catch (err) {
    throw new Response("Failed to load menu", { status: 500 });
  }
}
