import type { CartItemType } from "../App";
import { FaTrash } from "react-icons/fa";

function CartItem({ cartItem, setCartItems }: {
  cartItem: CartItemType;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {
  const handleRemove = () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItem.id));
  };

  return (
      <div className="relative border-2 p-1 rounded-md shadow-md bg-white max-w-sm">
          <button
          onClick={handleRemove}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          title="Remove item from cart"
        >
          <FaTrash className="text-red-500" />
        </button>
        <h3>{cartItem.title}</h3>
        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: ${cartItem.price.toFixed(2)}</p>
        <p>Description: {cartItem.description}</p>
        <p>Category: {cartItem.category}</p>
        <img src={cartItem.image} alt={cartItem.title} className="w-32 h-32 object-cover mb-2" />

      </div>
  );
}

export default CartItem;