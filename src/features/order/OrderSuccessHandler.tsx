import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { clearCart } from "../cart/cartSlice";
import { useToast } from "../../contexts/ToastContext";

/**
 * This component handles clearing the cart after a successful order creation.
 * It should be rendered on the Order page.
 */
function OrderSuccessHandler() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { showToast } = useToast();

  useEffect(() => {
    // Check if we're coming from a successful order creation via URL query parameter
    const isSuccess = searchParams.get("success") === "true";

    if (isSuccess) {
      dispatch(clearCart());

      // Show a toast notification that the cart was cleared
      showToast("Order placed", "success", 3000);

      // Remove the query parameter to prevent clearing the cart again on page refresh
      // by replacing the current URL without the query parameter
      searchParams.delete("success");
      setSearchParams(searchParams, { replace: true });
    }
  }, [dispatch, searchParams, setSearchParams, showToast]);

  // This component doesn't render anything
  return null;
}

export default OrderSuccessHandler;
