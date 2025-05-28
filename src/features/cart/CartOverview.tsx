import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-warm-light">
      <h2>Cart overview</h2>
      <p className="text-text-secondary font-semibold uppercase">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="text-text-primary">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
