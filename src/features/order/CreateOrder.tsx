import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { OrderCreateData } from "../../types/order";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
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
          <button type="submit">Order now</button>
        </div>
      </Form>
    </div>
  );
}

export async function createOrderAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const cartValue = formData.get("cart");
  if (typeof cartValue !== "string") {
    throw new Error("Invalid cart data");
  }

  const order: OrderCreateData = {
    customer: formData.get("customer") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    priority: formData.get("priority") === "on",
    cart: JSON.parse(cartValue),
  };

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

// export interface OrderItemData {
//   id: string;
//   status: OrderStatus;
//   customer: string;
//   phone: string;
//   address: string;
//   priority: boolean;
//   pizzas: CartItemData[];
//   estimatedDelivery: string;
//   position: string;
//   orderPrice: number;
//   priorityPrice: number;
//   cart: CartItemData[];
// }
