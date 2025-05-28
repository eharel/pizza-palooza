import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout bg-surface">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-[50vh]">
            <Loader />
          </div>
        ) : (
          <>
            <Outlet />
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <CartOverview />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
