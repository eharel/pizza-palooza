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
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
          {actionData?.success === false && actionData.errors?.customer && (
            <p className="error">{actionData.errors.customer}</p>
          )}
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {actionData?.success === false && actionData.errors?.phone && (
            <p className="error">{actionData.errors.phone}</p>
          )}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
          {actionData?.success === false && actionData.errors?.address && (
            <p className="error">{actionData.errors.address}</p>
          )}
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
