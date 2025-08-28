import type { CartItemType } from '../App';

export type ShoppingItemType = {
  id: string;
  title: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
  image: string;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (item: CartItemType) => void;
}

function ShoppingItem({ id, title, quantity, price, description, category, image, setQuantity, addToCart }: ShoppingItemType) {
  const handleDecrement = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleIncrement = () => {
    setQuantity((q) => q + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart({ id, title, quantity, price, description, category, image });
    setQuantity(1); // Reset quantity after adding to cart
    alert(`${title} has been added to your cart!`);
  };
  return (
    <div className="border-2 p-1 rounded-md shadow-md bg-white max-w-sm">
      <h3>{title}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <img src={image} alt={title} className="w-32 h-32 object-cover mb-2" />
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700"
                 htmlFor={`quantity-${id}`}>Quantity:</label>
          <div className="flex items-center space-x-2">
            <button type="button" onClick={handleDecrement}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-
            </button>
            <input
              type="number"
              id={id}
              name={title}
              min="1"
              value={quantity}
              onChange={handleChange}
              className="block w-20 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button type="button" onClick={handleIncrement}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}

export default ShoppingItem;