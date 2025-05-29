import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Pizza } from "../../types/pizza";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <div className="py-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-display font-bold mb-2">Our Menu</h2>
        <p className="text-text-secondary mb-1">Click on a pizza to add it to your cart</p>
        <p className="text-sm text-text-light">{menu.length} delicious options available</p>
      </div>
      
      {/* Grid layout with 3 columns on larger screens */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {menu.map((pizza: Pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
