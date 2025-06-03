import { Pizza } from "../../types/pizza";
import Button from "../../ui/Buttons/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../cart/cartSlice";
import QuantityControl from "../shared/QuantityControl";
import RemoveButton from "../shared/RemoveButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const quantity = useSelector(
    (state: RootState) =>
      state.cart.items.find((item) => item.pizza.id === pizza.id)?.quantity,
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem(pizza));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(pizza.id));
  };

  const handleIncrement = () => {
    dispatch(increaseQuantity(pizza.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(pizza.id));
  };

  return (
    <li
      className={`card overflow-hidden transition-transform hover:scale-[1.02] ${soldOut ? "opacity-70 grayscale" : ""}`}
    >
      {/* Image at the top */}
      <div className="relative">
        <img src={imageUrl} alt={name} className="h-36 w-full object-cover" />
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-dark/50">
            <p className="rotate-12 rounded-lg bg-primary px-2 py-1 text-xs font-bold text-white">
              SOLD OUT
            </p>
          </div>
        )}

        {/* Price badge */}
        {!soldOut && (
          <div className="absolute right-2 top-2 z-10">
            <span
              className="inline-block cursor-pointer rounded-full bg-cheese px-3 py-1.5 text-sm font-bold text-stone-dark shadow-md ring-2 ring-white/70 transition-all duration-200 hover:scale-125 hover:bg-cheese-dark hover:shadow-lg hover:ring-white"
              style={{ transformOrigin: "center" }}
            >
              {formatCurrency(unitPrice)}
            </span>
          </div>
        )}
      </div>

      {/* Content below image */}
      <div className="p-3">
        <h3 className="mb-1 truncate text-base font-bold">{name}</h3>
        <p className="mb-3 line-clamp-2 h-9 text-xs capitalize text-text-secondary">
          {ingredients.join(", ")}
        </p>

        {!soldOut ? (
          <div className="flex items-center justify-between gap-2">
            {!quantity ? (
              <Button
                classNameAddition="mx-auto block"
                onClick={(e) => handleAddToCart(e)}
              >
                Add to cart
              </Button>
            ) : (
              <>
                <QuantityControl
                  quantity={quantity ?? 1}
                  onDecrement={() => {
                    handleDecrement();
                  }}
                  onIncrement={() => {
                    handleIncrement();
                  }}
                />
                <RemoveButton
                  onClick={() => {
                    handleRemove();
                  }}
                  name={name}
                />
              </>
            )}
          </div>
        ) : (
          <p className="text-center text-xs italic text-stone">
            Check back soon!
          </p>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
