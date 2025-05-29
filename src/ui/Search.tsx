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
      className="flex items-center gap-2 w-full"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-stone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          name="q"
          placeholder="Search pizzas, toppings..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-stone-light rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-surface-light"
        />
      </div>
      
      <div className="relative">
        <select
          name="type"
          defaultValue={searchDomain}
          onChange={(e) => setSearchDomain(e.target.value)}
          className="appearance-none bg-cheese-light border border-cheese rounded-lg py-2 pl-3 pr-8 text-stone-dark font-medium focus:outline-none focus:ring-2 focus:ring-cheese-dark/50"
        >
          {SEARCH_TYPES.map((type) => (
            <option key={type} value={type}>
              {SEARCH_TYPE_LABELS[type]}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-dark">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-1"
      >
        <span>Search</span>
      </button>
    </form>
  );
}

export default Search;
