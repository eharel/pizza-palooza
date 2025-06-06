import LinkButton from "../../ui/Buttons/LinkButton";

function EmptyCart() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="mt-8 rounded-lg bg-stone-light/30 p-8 text-center">
        <p className="mb-4 text-xl font-semibold text-stone-dark">
          Your cart is still empty
        </p>
        <p className="mb-6 text-stone-dark">
          Start adding some delicious pizzas to your order!
        </p>
        <LinkButton to="/menu">Browse our menu</LinkButton>
      </div>
    </div>
  );
}

export default EmptyCart;
