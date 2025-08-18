import { useEffect } from "react";
import CartItem from "./CartItem.tsx";
import type { CartItemType } from "../pages/Layout";


function CartItemList({ cartItems, setCartItems }: {
  cartItems: CartItemType[],
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {
  useEffect(() => {
    const cartItem: CartItemType = {
      id: 1,
      name: "Sample Item",
      price: 19.99,
      quantity: 1
    };
    setCartItems(cartItems => {
      if (cartItems.some((item: CartItemType) => item.id === cartItem.id))
        return cartItems;
      return [...cartItems, cartItem];
    });
  }, [setCartItems]);

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <CartItem cartItem={item} setCartItems={setCartItems} />
          </div>
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