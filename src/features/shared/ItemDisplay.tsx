import { formatCurrency } from "../../utils/helpers";
import type { CartItemData } from "../../types/cart";

type ItemDisplayProps = {
  item: CartItemData;
  interactive?: boolean;
  onRemove?: (id: number) => void;
  onIncrement?: (id: number) => void;
  onDecrement?: (id: number) => void;
};

function ItemDisplay({
  item,
  interactive = false,
  onRemove,
  onIncrement,
  onDecrement,
}: ItemDisplayProps) {
  const { pizza, quantity, totalPrice } = item;
  const pizzaId = pizza.id;
  const name = pizza.name;

  const handleDecrement = () => {
    if (!interactive || !onDecrement) return;

    if (quantity > 1) {
      onDecrement(pizzaId);
    }
  };

  const handleIncrement = () => {
    if (!interactive || !onIncrement) return;
    onIncrement(pizzaId);
  };

  const handleRemove = () => {
    if (!interactive || !onRemove) return;
    onRemove(pizzaId);
  };

  return (
    <li className="flex items-center justify-between border-b border-stone-light py-3">
      <div className="flex items-center gap-4">
        {interactive ? (
          <div className="flex items-center">
            <div className="flex h-8 items-center rounded-l-full bg-cheese-light px-1">
              <button
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  quantity <= 1
                    ? "cursor-not-allowed bg-stone-light/50 text-stone-dark/40"
                    : "cursor-pointer bg-white text-stone-dark hover:bg-stone-light"
                }`}
                aria-label="Decrease quantity"
                aria-disabled={quantity <= 1}
              >
                −
              </button>
            </div>
            <span className="flex h-8 w-8 items-center justify-center bg-cheese-light font-display text-sm text-stone-dark">
              {quantity}
            </span>
            <div className="flex h-8 items-center rounded-r-full bg-cheese-light px-1">
              <button
                onClick={handleIncrement}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-stone-dark transition-colors hover:bg-stone-light"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cheese-light font-display text-sm text-stone-dark">
            {quantity}
          </span>
        )}
        <p className="font-medium">{name}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-bold text-stone-dark">
          {formatCurrency(totalPrice ?? pizza.unitPrice * quantity)}
        </p>
        {interactive && onRemove && (
          <button
            onClick={handleRemove}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-light text-xs text-stone-dark transition-colors hover:bg-tomato hover:text-white"
            aria-label={`Remove ${name} from cart`}
            title="Remove from cart"
          >
            &times;
          </button>
        )}
      </div>
    </li>
  );
}

export default ItemDisplay;
