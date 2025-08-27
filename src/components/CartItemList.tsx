import CartItem from "./CartItem.tsx";
import type { CartItemType } from "../pages/Layout";


function CartItemList({ cartItems, setCartItems }: {
  cartItems: CartItemType[],
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} setCartItems={setCartItems} />
        ))}
        {cartItems.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            Your cart is empty. Add some items to your cart!
          </div>
        )}
      </div>
  );
}

export default CartItemList;