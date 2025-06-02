import { Link } from "react-router-dom";
import CreateUser from "../../features/user/CreateUser";
import Marketing from "./Marketing";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Home() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div className="py-8 md:py-16">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-tomato-light to-primary">
        <div className="absolute inset-0 bg-[url('/pizza-pattern.png')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 font-pizza text-4xl text-white md:text-6xl">
              Click. Order. Devour.
            </h1>
            <p className="mb-8 font-display text-xl text-surface-light md:text-2xl">
              Pizza made easy. Life made better.
            </p>
            <p className="mb-10 text-lg text-surface-light/90">
              Handcrafted pizzas delivered to your door in 30 minutes or less.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/menu" className="btn btn-secondary px-8 py-3 text-lg">
                View Menu
              </Link>
              <Link
                to="/order/new"
                className="btn btn-outline border-white px-8 py-3 text-lg text-white hover:bg-white/20"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Marketing />

      {username === "" && <CreateUser />}
    </div>
  );
}

export default Home;
