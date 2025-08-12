import CartItem from './CartItem.tsx';
import type { CartItemType } from '../pages/Layout';


function CartItemList({cartItems, setCartItems} : {cartItems: CartItemType[], setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>}) {
  return (
    <div className="cart-item-list">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <CartItem cartItem={item} setCartItems={setCartItems} />
        </div>
      ))}
      {cartItems.length === 0 && (
        <div className="empty-cart-message">
          Your cart is empty. Add some items to your cart!
        </div>
      )}
    </div>
  );
}

export default CartItemList;