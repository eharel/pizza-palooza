import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartTotalPrice,
  selectCartTotalPizzaQuantity,
  selectCartTotalPizzaTypes,
} from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalPizzaTypes = useSelector(selectCartTotalPizzaTypes);
  const totalPizzas = useSelector(selectCartTotalPizzaQuantity);

  return (
    <div className="bg-cheese px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
            {totalPizzaTypes}
          </span>
          <p className="font-semibold">
            {totalPizzas} pizzas <span className="mx-2">•</span>{" "}
            <span className="font-bold text-primary-dark">
              {formatCurrency(totalPrice)}
            </span>
          </p>
        </div>

        <Link to="/cart" className="btn btn-primary">
          <span>Open cart </span>
          <span className="text-lg"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
