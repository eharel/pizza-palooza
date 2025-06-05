import { createOrder } from "../../services/apiRestaurant";
import { OrderBase, FormErrors } from "../../types/order";
import { redirect } from "react-router-dom";
import { ActionResults } from "../../types/shared";

export async function createOrderAction({
  request,
}: {
  request: Request;
}): Promise<Response | ActionResults<never, FormErrors>> {
  const formData = await request.formData();
  const cartValue = formData.get("cart");
  if (typeof cartValue !== "string") {
    throw new Error("Invalid cart data");
  }

  const order: OrderBase = {
    customer: formData.get("customer") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    position: formData.get("position") as string,
    priority: formData.get("priority") === "true",
    cart: JSON.parse(cartValue),
  };

  const errors = checkForErrors(order);
  if (errors) return { success: false, errors };

  const newOrder = await createOrder(order);

  // We'll use a URL query parameter to indicate successful order creation
  // This is a more TypeScript-friendly approach than using state in the redirect
  return redirect(`/order/${newOrder.id}?success=true`);
}

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function checkForErrors(order: OrderBase): FormErrors | null {
  const errors: FormErrors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!order.address) {
    errors.address = "Address is required";
  }

  if (!order.customer) {
    errors.customer = "Customer name is required";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
