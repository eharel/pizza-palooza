import { Pizza } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className={`card overflow-hidden transition-transform hover:scale-[1.02] ${soldOut ? 'opacity-70 grayscale' : ''}`}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {soldOut && (
          <div className="absolute inset-0 bg-stone-dark/50 flex items-center justify-center">
            <p className="bg-primary text-white font-bold py-2 px-4 rounded-lg rotate-12 text-lg">
              SOLD OUT
            </p>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-text-secondary mb-4 text-sm">{ingredients.join(", ")}</p>
        
        <div className="flex justify-between items-center">
          {!soldOut && (
            <p className="text-primary-dark font-bold text-lg">
              {formatCurrency(unitPrice)}
            </p>
          )}
          
          {!soldOut && (
            <button className="btn btn-primary">
              Add to cart
            </button>
          )}
          
          {soldOut && (
            <p className="text-stone italic">
              Check back soon!
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
