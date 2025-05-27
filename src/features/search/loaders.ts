import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { SearchType } from "../../types/search";

export async function searchLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q")?.trim() || "";
  const type = (url.searchParams.get("type") || "menu") as SearchType;

  console.log("Search query: ", q);
  console.log("Search type: ", type);

  // If user is searching for a specific order ID
  //   if (type === "orders" && /^\d+$/.test(q)) {
  //     console.log("Order ID: ", q);
  //     return redirect(`/order/${q}`);
  //   }

  if (type === "orders") {
    console.log("Order ID: ", q);
    return redirect(`/order/${q}`);
  }

  if (type === "menu") {
    // const items = await getMatchingMenuItems(q);
    // return { type, results: items, query: q };
    return redirect(`/menu?q=${q}`);
  }

  // Optional: fallback
  return { type: "menu", results: [], query: q };
}
