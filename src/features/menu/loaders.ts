import { Pizza } from "../../types/pizza";
import { getMenu } from "../../services/apiRestaurant";
import { LoaderFunctionArgs } from "react-router-dom";

export async function menuLoader({
  request,
}: LoaderFunctionArgs): Promise<Pizza[]> {
  try {
    const menu = await getMenu();

    const url = new URL(request.url);
    const query = url.searchParams.get("q")?.toLowerCase() ?? "";

    if (!query) {
      return menu;
    }

    // Filter menu items based on search query
    const filteredMenu = menu.filter((pizza) => {
      // Check pizza name and ingredients for the search term
      return (
        pizza.name.toLowerCase().includes(query) ||
        pizza.ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes(query)
        )
      );
    });

    return filteredMenu;
  } catch (err) {
    throw new Response("Failed to load menu", { status: 500 });
  }
}
