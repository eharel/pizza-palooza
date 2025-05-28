import CartOverview from "../features/cart/CartOverview";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="bg-base">
      <h1 className="text-text-secondary mb-4 text-center text-3xl font-bold">
        Click. Order. Devour.
        <br />
        <span className="text-primary">Pizza made easy. Life made better.</span>
      </h1>
      <p className="text-text text-center">
        Order now and get your pizza delivered to your door.
      </p>
      {/* <CartOverview /> */}
      <CreateUser />
    </div>
  );
}

export default Home;
