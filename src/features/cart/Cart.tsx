import { useState } from "react";
import Button from "../../ui/Buttons/Button";
import LinkButton from "../../ui/Buttons/LinkButton";
import ConfirmationDialog from "../../ui/ConfirmationDialog";
import ItemDisplay from "../shared/ItemDisplay";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

type ConfirmationState = {
  type: "item" | "cart" | null;
  itemId?: number;
};

function Cart() {
  const [cart, setCart] = useState(fakeCart);
  const [confirmation, setConfirmation] = useState<ConfirmationState>({
    type: null,
  });
  const username = useSelector((state: RootState) => state.user.username);

  // Calculate cart total
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // Handle item removal request
  const handleRemoveItem = (id: number) => {
    setConfirmation({ type: "item", itemId: id });
  };

  // Handle clear cart request
  const handleClearCart = () => {
    setConfirmation({ type: "cart" });
  };

  // Handle quantity update
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setCart(
      cart.map((item) => {
        if (item.pizzaId === id) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: item.unitPrice * newQuantity,
          };
        }
        return item;
      }),
    );
  };

  // Confirm action
  const confirmAction = () => {
    if (confirmation.type === "item" && confirmation.itemId !== undefined) {
      // Remove specific item
      setCart(cart.filter((item) => item.pizzaId !== confirmation.itemId));
    } else if (confirmation.type === "cart") {
      // Clear entire cart
      setCart([]);
    }
    setConfirmation({ type: null });
  };

  // Cancel action
  const cancelAction = () => {
    setConfirmation({ type: null });
  };

  // Get dialog props based on confirmation type
  const getDialogProps = () => {
    if (confirmation.type === "item") {
      const itemName = cart.find(
        (item) => item.pizzaId === confirmation.itemId,
      )?.name;
      return {
        title: "Remove Item",
        message: `Are you sure you want to remove ${itemName || "this item"} from your cart?`,
        confirmText: "Remove",
        isDestructive: true,
      };
    } else {
      return {
        title: "Clear Cart",
        message: "Are you sure you want to remove all items from your cart?",
        confirmText: "Clear All",
        isDestructive: true,
      };
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>

      <h2 className="mb-6 mt-7 text-2xl font-bold">Your cart, {username}</h2>

      {cart.length === 0 ? (
        <div className="mt-8 rounded-lg bg-stone-light/30 p-8 text-center">
          <p className="mb-4 text-xl font-semibold text-stone-dark">
            Your cart is empty
          </p>
          <LinkButton to="/menu">Go order some delicious pizzas</LinkButton>
        </div>
      ) : (
        <div className="mt-4 space-y-6">
          <ul className="divide-y divide-stone-light">
            {cart.map((item) => (
              <ItemDisplay
                key={item.pizzaId}
                item={item}
                interactive={true}
                onRemove={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </ul>

          <div className="space-y-2 rounded-lg bg-stone-light/30 p-6">
            <p className="flex items-center justify-between text-sm font-medium">
              <span>Subtotal:</span>
              <span>{formatCurrency(totalPrice)}</span>
            </p>
            <p className="flex items-center justify-between text-sm font-medium">
              <span>Delivery fee:</span>
              <span>{formatCurrency(5)}</span>
            </p>
            <p className="flex items-center justify-between border-t border-stone pt-2 text-lg font-bold">
              <span>Total:</span>
              <span>{formatCurrency(totalPrice + 5)}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button to="/order/new" classNameAddition="px-6 py-3">
              Order pizzas
            </Button>
            <button
              className="rounded-full border border-stone px-4 py-2 text-sm font-medium text-stone-dark transition-colors hover:bg-stone-light/50"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {confirmation.type !== null && (
        <ConfirmationDialog
          {...getDialogProps()}
          onConfirm={confirmAction}
          onCancel={cancelAction}
        />
      )}
    </div>
  );
}

export default Cart;
