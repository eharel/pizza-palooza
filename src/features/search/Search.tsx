import {
  SEARCH_TYPES,
  SEARCH_TYPE_LABELS,
  SearchType,
} from "../../types/search";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function Search() {
  const location = useLocation();

  // Infer type from path
  const defaultType: SearchType = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith("/order")) return "orders";
    if (path.startsWith("/menu")) return "menu";
    return "menu"; // fallback
  }, [location.pathname]);

  return (
    <form
      role="search"
      action="/redirect"
      method="get"
      className="flex items-center gap-2"
    >
      <input type="search" name="q" placeholder="Search..." />
      <select name="type" defaultValue={defaultType}>
        {SEARCH_TYPES.map((type) => (
          <option key={type} value={type}>
            {SEARCH_TYPE_LABELS[type]}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
