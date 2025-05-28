import { Link } from "react-router-dom";
import Search from "./Search";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-cheese-light">
      <Link to="/" className="tracking-[0.5rem]">
        PizzaPalooza
      </Link>
      <Search />
      <Username />
    </header>
  );
}

export default Header;
