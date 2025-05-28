import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="py-8 md:py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tomato-light to-primary mb-16">
        <div className="absolute inset-0 bg-[url('/pizza-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-pizza text-4xl md:text-6xl text-white mb-6">
              Click. Order. Devour.
            </h1>
            <p className="text-xl md:text-2xl font-display text-surface-light mb-8">
              Pizza made easy. Life made better.
            </p>
            <p className="text-lg text-surface-light/90 mb-10">
              Handcrafted pizzas delivered to your door in 30 minutes or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn btn-secondary text-lg px-8 py-3">
                View Menu
              </Link>
              <Link to="/create-order" className="btn btn-outline border-white text-white hover:bg-white/20 text-lg px-8 py-3">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Why Choose PizzaPalooza?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-cheese-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍕</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fresh Ingredients</h3>
            <p className="text-text-secondary">We use only the freshest ingredients, sourced locally whenever possible.</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-tomato-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-text-secondary">Your pizza will be at your door in 30 minutes or less, guaranteed.</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-basil-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
            <p className="text-text-secondary">Our packaging is 100% compostable and made from recycled materials.</p>
          </div>
        </div>
      </div>

      {/* Create User Section */}
      <div className="bg-warm py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
            <p className="text-center text-text-secondary mb-8">Join PizzaPalooza today and get 20% off your first order!</p>
            <CreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
