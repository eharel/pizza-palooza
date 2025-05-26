import { Pizza } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {soldOut ? <p>Sold out</p> : <p>{formatCurrency(unitPrice)}</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
