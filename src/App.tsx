import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastProvider } from "./contexts/ToastContext";
import Home from "./ui/Home/Home";
import Menu from "./features/menu/Menu";
import { menuLoader } from "./features/menu/loaders";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import {
  createOrderAction,
  updateOrderAction,
} from "./features/order/orderActions";
import AppLayout from "./ui/AppLayout";
import { orderLoader } from "./features/order/orderLoaders";
import Error from "./ui/Error";
import CreateOrder from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "order/:id",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

export default App;
