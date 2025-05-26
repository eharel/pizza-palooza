import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Pizza } from "../../types/pizza";

function Menu() {
  const menu = useLoaderData() as Pizza[];
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
