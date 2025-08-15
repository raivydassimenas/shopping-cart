import type { CartItemType } from "../pages/Layout.tsx";
import { FaTrash } from "react-icons/fa";

function CartItem({ cartItem, setCartItems }: {
  cartItem: CartItemType;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {
  const handleRemove = () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItem.id));
  };

  return (
    <div className="border-2 p-1 rounded-md shadow-md bg-white max-w-sm">
      <div className={"flex items-center justify-between mb-2"}>
        <h3>{cartItem.name}</h3>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 mb-2 "
          title="Remove item from cart"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
      <p>Price: ${cartItem.price.toFixed(2)}</p>
      <p>Quantity: {cartItem.quantity}</p>
    </div>
  );
}

export default CartItem;