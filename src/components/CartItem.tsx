import type { CartItemType } from "../pages/Layout.tsx";
import { useState } from "react";

function CartItem({ cartItem, setCartItems }: {
  cartItem: CartItemType;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {
  const handleRemove = () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItem.id));
  };

  const [quantity, setQuantity] = useState(1);

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
    <div className="cart-item">
      <h3>{cartItem.name}</h3>
      <p>Price: ${cartItem.price.toFixed(2)}</p>
      <button onClick={handleRemove}>Remove</button>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700"
                 htmlFor={`quantity-${cartItem.id}`}>Quantity:</label>
          <button type="button" onClick={handleDecrement}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-
          </button>
          <input
            type="number"
            id={`quantity-${cartItem.id}`}
            name={`quantity-${cartItem.id}`}
            min="1"
            value={quantity}
            onChange={handleChange}
            className="block w-20 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button type="button" onClick={handleIncrement}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+
          </button>
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

export default CartItem;