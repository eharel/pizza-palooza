function RemoveButton({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-light text-xs text-stone-dark transition-colors hover:bg-tomato hover:text-white"
      aria-label={`Remove ${name} from cart`}
      title="Remove from cart"
    >
      &times;
    </button>
  );
}

export default RemoveButton;
