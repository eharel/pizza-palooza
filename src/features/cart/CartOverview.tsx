import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartTotalPrice,
  selectCartTotalPizzaQuantity,
  selectCartTotalPizzaTypes,
} from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPrice = useSelector(selectCartTotalPrice());
  const totalPizzaTypes = useSelector(selectCartTotalPizzaTypes());
  const totalPizzas = useSelector(selectCartTotalPizzaQuantity());
  const location = useLocation();

  // Don't render if there are no items in cart or if we're on the cart page
  if (totalPizzas === 0 || location.pathname === "/cart") return null;

  return (
    <div className="border-t border-cheese-dark/20 bg-cheese px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white shadow-sm">
              {totalPizzas}
            </span>
            <p className="text-sm font-medium text-stone-dark md:text-base">
              {totalPizzas === 1 ? "pizza" : "pizzas"}
            </p>
          </div>

          <span className="text-stone-dark/60">•</span>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-dark">
              {totalPizzaTypes}
            </span>
            <p className="text-sm font-medium text-stone-dark md:text-base">
              {totalPizzaTypes === 1 ? "type" : "types"}
            </p>
          </div>

          <span className="text-stone-dark/60">•</span>

          <span className="font-bold text-primary-dark">
            {formatCurrency(totalPrice)}
          </span>
        </div>

        <Link
          to="/cart"
          className="btn btn-primary flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md"
        >
          <span>Open cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-lg"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
