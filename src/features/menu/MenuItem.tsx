import { Pizza } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className={`card overflow-hidden transition-transform hover:scale-[1.02] ${soldOut ? 'opacity-70 grayscale' : ''}`}>
      {/* Image at the top */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-36 object-cover"
        />
        {soldOut && (
          <div className="absolute inset-0 bg-stone-dark/50 flex items-center justify-center">
            <p className="bg-primary text-white font-bold py-1 px-2 rounded-lg rotate-12 text-xs">
              SOLD OUT
            </p>
          </div>
        )}
        
        {/* Price badge */}
        {!soldOut && (
          <div className="absolute top-2 right-2">
            <span className="bg-cheese text-stone-dark font-bold text-sm py-1 px-2 rounded-full shadow-sm">
              {formatCurrency(unitPrice)}
            </span>
          </div>
        )}
      </div>
      
      {/* Content below image */}
      <div className="p-3">
        <h3 className="font-bold text-base mb-1 truncate">{name}</h3>
        <p className="text-text-secondary text-xs mb-3 line-clamp-2 h-9">
          {ingredients.join(", ")}
        </p>
        
        {!soldOut ? (
          <button className="w-full btn btn-primary text-xs py-1.5">
            Add to cart
          </button>
        ) : (
          <p className="text-stone italic text-xs text-center">
            Check back soon!
          </p>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
