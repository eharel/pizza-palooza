import { formatCurrency } from "../../utils/helpers";
import type { CartItemData } from "../../types/cart";

type CartItemDisplayProps = {
  item: CartItemData;
  onRemove: (id: number) => void;
};

function CartItemDisplay({ item, onRemove }: CartItemDisplayProps) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between border-b border-stone-light py-3">
      <div className="flex items-center gap-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cheese-light font-display text-sm text-stone-dark">
          {quantity}
        </span>
        <p className="font-medium">{name}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-bold text-stone-dark">{formatCurrency(totalPrice)}</p>
        <button 
          onClick={() => onRemove(pizzaId)}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-light text-xs text-stone-dark transition-colors hover:bg-tomato hover:text-white"
          aria-label={`Remove ${name} from cart`}
          title="Remove from cart"
        >
          &times;
        </button>
      </div>
    </li>
  );
}

export default CartItemDisplay;
