import { formatCurrency } from "../../utils/helpers";
import type { CartItem } from "../../types/cart";
import QuantityControl from "./QuantityControl";
import RemoveButton from "./RemoveButton";

type ItemDisplayProps = {
  item: CartItem;
  interactive?: boolean;
  onRemove?: (id: number) => void;
  onIncrement?: (id: number) => void;
  onDecrement?: (id: number) => void;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
};

function ItemDisplay({
  item,
  interactive = false,
  onRemove,
  onIncrement,
  onDecrement,
  isLoadingIngredients,
  ingredients,
}: ItemDisplayProps) {
  const { pizzaId, quantity, totalPrice } = item;
  const name = item.name;

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
    <li className="border-b border-stone-light py-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-4">
          {interactive ? (
            <QuantityControl
              quantity={quantity}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cheese-light font-display text-sm text-stone-dark">
              {quantity}
            </span>
          )}
          <p className="font-medium">{name}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-bold text-stone-dark">
            {formatCurrency(totalPrice)}
          </p>
          {interactive && onRemove && (
            <RemoveButton onClick={handleRemove} name={name} />
          )}
        </div>
      </div>
      {/* Ingredients displayed below the name and price */}
      {(ingredients || isLoadingIngredients) && (
        <p className="text-sm text-stone-dark ml-12">
          {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
        </p>
      )}
    </li>
  );
}

export default ItemDisplay;
