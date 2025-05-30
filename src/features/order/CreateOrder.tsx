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
    <div className="max-w-2xl mx-auto bg-surface-light rounded-2xl p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center font-pizza text-primary">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new" className="space-y-6">
        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">First Name</label>
          <input 
            type="text" 
            name="customer" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          />
          {actionData?.success === false && actionData.errors?.customer && (
            <p className="text-tomato-light text-sm mt-1">{actionData.errors.customer}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">Phone number</label>
          <div>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          {actionData?.success === false && actionData.errors?.phone && (
            <p className="text-tomato-light text-sm mt-1">{actionData.errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-text-secondary">Address</label>
          <div>
            <input 
              type="text" 
              name="address" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          {actionData?.success === false && actionData.errors?.address && (
            <p className="text-tomato-light text-sm mt-1">{actionData.errors.address}</p>
          )}
        </div>

        <div className="flex items-center space-x-3 py-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 text-primary focus:ring-primary rounded"
          />
          <label htmlFor="priority" className="font-medium text-text-secondary">Want to give your order priority?</label>
        </div>

        <div className="pt-4">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full btn btn-primary py-3 rounded-lg font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-70"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
