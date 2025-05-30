function MarketingCard({
  colorClass = "bg-cheese-light",
  emoji = "♨️",
  title,
  description,
}: {
  colorClass: string;
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card p-6 text-center">
      <div
        className={`${colorClass} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full`}
      >
        <span className="text-2xl">{emoji}</span>
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}

export default MarketingCard;
