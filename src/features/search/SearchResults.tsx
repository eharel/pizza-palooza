import { useLoaderData } from "react-router-dom";
import type { SearchType } from "../../types/search";

type LoaderReturn = {
  type: SearchType;
  results: any[];
  query: string;
};

export default function SearchResults() {
  const { type, results, query } = useLoaderData() as LoaderReturn;

  return (
    <div>
      <h2>
        Results for “{query}” in {type}
      </h2>
      {results.length === 0 && <p>No results found.</p>}

      <ul>
        {results.map((item) => (
          <li key={item.id}>{type === "menu" ? item.name : item.customer}</li>
        ))}
      </ul>
    </div>
  );
}
