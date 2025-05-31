import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-cheese px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
            23
          </span>
          <p className="font-semibold">
            23 pizzas <span className="mx-2">•</span>{" "}
            <span className="font-bold text-primary-dark">$23.45</span>
          </p>
        </div>

        <Link to="/cart" className="btn btn-primary">
          <span>Open cart</span>
          <span className="text-lg">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
