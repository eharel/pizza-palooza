import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Pizza } from "../../types/pizza";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <>
      <h2>Menu</h2>
      <p>Click on a pizza to add it to your cart</p>
      <p>There are {menu.length} items in the menu.</p>
      <ul>
        {menu.map((pizza: Pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
