import { formatCurrency } from "../../utils/helpers";
import type { CartItemData } from "../../types/cart";

type CartItemDisplayProps = {
  item: CartItemData;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
};

function CartItemDisplay({ item, onRemove, onUpdateQuantity }: CartItemDisplayProps) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(pizzaId, quantity - 1);
    }
    // Minimum quantity is 1, removal only through X button
  };

  const handleIncrement = () => {
    onUpdateQuantity(pizzaId, quantity + 1);
  };

  return (
    <li className="flex items-center justify-between border-b border-stone-light py-3">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="flex h-8 items-center rounded-l-full bg-cheese-light px-1">
            <button 
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold transition-colors ${quantity <= 1 
                ? 'bg-stone-light/50 text-stone-dark/40 cursor-not-allowed' 
                : 'bg-white text-stone-dark hover:bg-stone-light cursor-pointer'}`}
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
