import { formatCurrency } from "../../utils/helpers";
import type { CartItemData } from "../../types/cart";

function CartItemDisplay({ item }: { item: CartItemData }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItemDisplay;
