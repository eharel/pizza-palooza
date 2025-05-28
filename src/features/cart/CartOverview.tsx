import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-cheese py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            23
          </span>
          <p className="font-semibold">
            23 pizzas <span className="mx-2">•</span> <span className="text-primary-dark font-bold">$23.45</span>
          </p>
        </div>
        
        <Link 
          to="/cart" 
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          <span>Open cart</span>
          <span className="text-lg">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
