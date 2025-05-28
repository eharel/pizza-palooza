import { Link } from "react-router-dom";
import Search from "./Search";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cheese shadow-menu py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-pizza text-2xl md:text-3xl text-primary-dark tracking-wider"
        >
          PizzaPalooza
        </Link>
        
        <div className="hidden md:block flex-grow max-w-md mx-4">
          <Search />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/menu" className="font-medium hover:text-primary-dark transition-colors">
            Menu
          </Link>
          <Username />
        </div>
      </div>
      
      <div className="md:hidden mt-4">
        <Search />
      </div>
    </header>
  );
}

export default Header;
