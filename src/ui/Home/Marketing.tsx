import MarketingCard from "./MarketingCard";

function Marketing() {
  return (
    <div className="container mx-auto mb-16 px-4">
      <h2 className="mb-12 text-center font-display text-3xl font-bold">
        Why Choose PizzaPalooza?
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <MarketingCard
          colorClass="bg-cheese-light"
          emoji="🍕"
          title="Fresh Ingredients"
          description="We use only the freshest ingredients, sourced locally whenever possible."
        />
        <MarketingCard
          colorClass="bg-tomato-light"
          emoji="⏱️"
          title="Fast Delivery"
          description="Your pizza will be at your door in 30 minutes or less, guaranteed."
        />
        <MarketingCard
          colorClass="bg-basil-light"
          emoji="🌱"
          title="Eco-Friendly"
          description="Our packaging is 100% compostable and made from recycled materials."
        />
      </div>
    </div>
  );
}

export default Marketing;
