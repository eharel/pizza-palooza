export type SearchType = "menu" | "orders";

export const SEARCH_TYPES: SearchType[] = ["menu", "orders"];

export const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  menu: "Menu",
  orders: "Orders",
};

export interface SearchQuery {
  q: string;
  type: SearchType;
}
