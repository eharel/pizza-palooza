import { SEARCH_TYPES, SEARCH_TYPE_LABELS } from "../types/search";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Search() {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [searchDomain, setSearchDomain] = useState(() => {
    const path = location.pathname;
    if (path.startsWith("/order")) return "orders";
    if (path.startsWith("/menu")) return "menu";
    return "menu"; // fallback
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    if (searchDomain === "orders") {
      return navigate(`/order/${query}`);
    }

    if (searchDomain === "menu") {
      return navigate(`/menu?q=${query}`);
    }
  };

  return (
    <form
      role="search"
      // action="/redirect"
      method="get"
      className="flex items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="q"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        name="type"
        defaultValue={searchDomain}
        onChange={(e) => setSearchDomain(e.target.value)}
      >
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
