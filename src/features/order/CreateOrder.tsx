import { Form, useActionData, useNavigation } from "react-router-dom";
import { FormErrors } from "../../types/order";
import { ActionResults } from "../../types/shared";
import Button from "../../ui/Buttons/Button";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { selectUsername } from "../../features/user/userSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { getOrderPriceBreakdown } from "../../utils/cart";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const username = useSelector(selectUsername());

  const actionData = useActionData() as ActionResults<never, FormErrors> | null;

  const cartItems = useSelector(selectCartItems());

  const { itemsTotal, priorityFee, deliveryFee, totalPrice } =
    getOrderPriceBreakdown(cartItems, withPriority);

  if (!cartItems || cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-surface-light p-8 shadow-md">
      <h2 className="mb-8 text-center font-pizza text-3xl font-bold text-primary">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" action="/order/new" className="space-y-6">
        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            required
            className="input"
            defaultValue={username}
          />
          {actionData?.success === false && actionData.errors?.customer && (
            <p className="form-error">{actionData.errors.customer}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">
            Phone number
          </label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="input"
              defaultValue={""}
            />
          </div>
          {actionData?.success === false && actionData.errors?.phone && (
            <p className="form-error">{actionData.errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">
            Address
          </label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="input"
              defaultValue={""}
            />
          </div>
          {actionData?.success === false && actionData.errors?.address && (
            <p className="form-error">{actionData.errors.address}</p>
          )}
        </div>

        <div className="flex items-center space-x-3 py-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value="true"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 rounded text-primary focus:ring-primary"
          />
          <label htmlFor="priority" className="font-medium text-text-secondary">
            Want to give your order priority?
          </label>
        </div>

        <div className="pt-4">
          <input type="hidden" name="cart" value={JSON.stringify(cartItems)} />
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? `Placing order... (${formatCurrency(totalPrice)})`
              : `Order now (${formatCurrency(totalPrice)})`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
