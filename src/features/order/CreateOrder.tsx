import { Form, useActionData, useNavigation } from "react-router-dom";
import { FormErrors } from "../../types/order";
import { ActionResults } from "../../types/shared";

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

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const actionData = useActionData() as ActionResults<never, FormErrors> | null;

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {actionData?.success === false && actionData.errors?.customer && (
            <p className="mt-1 text-sm text-tomato-light">
              {actionData.errors.customer}
            </p>
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {actionData?.success === false && actionData.errors?.phone && (
            <p className="mt-1 text-sm text-tomato-light">
              {actionData.errors.phone}
            </p>
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {actionData?.success === false && actionData.errors?.address && (
            <p className="mt-1 text-sm text-tomato-light">
              {actionData.errors.address}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-3 py-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 rounded text-primary focus:ring-primary"
          />
          <label htmlFor="priority" className="font-medium text-text-secondary">
            Want to give your order priority?
          </label>
        </div>

        <div className="pt-4">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full rounded-lg py-3 font-bold text-white transition-all hover:bg-primary-dark active:scale-95 active:shadow-inner disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
