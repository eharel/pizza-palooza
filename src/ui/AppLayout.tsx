import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Outlet />
            <CartOverview />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
