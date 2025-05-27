import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
