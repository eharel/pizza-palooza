import { Link } from "react-router-dom";
import Search from "../features/search/Search";

function Header() {
  return (
    <header>
      <Link to="/">PizzaPalooza</Link>
      <Search />
      <p>username TODO</p>
    </header>
  );
}

export default Header;
