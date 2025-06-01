import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-hidden">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 pb-20 md:px-8 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>

      {!isLoading && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <CartOverview />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AppLayout;
