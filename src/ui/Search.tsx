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
      method="get"
      className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full flex-grow md:max-w-[600px] lg:max-w-[700px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-stone"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="q"
          placeholder="Search pizzas, toppings, orders..."
          title="Search pizzas, toppings, orders..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-lg border border-stone-light bg-surface-light py-2 pl-10 pr-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div className="flex w-full items-center gap-2 sm:w-auto">
        <label
          htmlFor="search-type"
          className="text-sm font-medium text-text-secondary"
        >
          Search in:
        </label>
        <div className="relative">
          <select
            id="search-type"
            name="type"
            defaultValue={searchDomain}
            onChange={(e) => setSearchDomain(e.target.value)}
            className="appearance-none rounded-lg border border-stone-light bg-surface-light py-2 pl-3 pr-8 font-medium text-stone-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {SEARCH_TYPES.map((type) => (
              <option key={type} value={type}>
                {SEARCH_TYPE_LABELS[type]}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-dark">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        <span>Search</span>
      </button>
    </form>
  );
}

export default Search;
