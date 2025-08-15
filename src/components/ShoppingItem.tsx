export type ShoppingItemType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

function ShoppingItem({ id, name, quantity, price, setQuantity }: ShoppingItemType) {
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
  return (
    <div className="shopping-item">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
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
              name={name}
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
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}

export default ShoppingItem;