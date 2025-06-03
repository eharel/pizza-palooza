function QuantityControl({
  quantity,
  onDecrement,
  onIncrement,
}: {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  return (
    <div className="flex items-center">
      <div className="flex h-8 items-center rounded-l-full bg-cheese-light px-1">
        <button
          onClick={onDecrement}
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
          onClick={onIncrement}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-stone-dark transition-colors hover:bg-stone-light"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityControl;
