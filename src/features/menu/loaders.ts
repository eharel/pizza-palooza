import { Pizza } from "../../types/pizza";
import { getMenu } from "../../services/apiRestaurant";
import { SearchQuery } from "../../types/search";

export async function menuLoader({
  params,
  searchParams: paramsSearchParams,
}: {
  params: any;
  searchParams: URLSearchParams;
}): Promise<Pizza[]> {
  try {
    const menu = await getMenu();

    // Get the current URLSearchParams from the window
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");

    if (!query) {
      return menu;
    }

    // Filter menu items based on search query
    const filteredMenu = menu.filter((pizza) => {
      // Check pizza name and ingredients for the search term
      return (
        pizza.name.toLowerCase().includes(query) ||
        pizza.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query)
        )
      );
    });

    return filteredMenu;
  } catch (err) {
    throw new Response("Failed to load menu", { status: 500 });
  }
}
