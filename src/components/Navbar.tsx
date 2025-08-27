import { Link, useLocation } from "react-router-dom";
import type { CartItemType } from "../pages/Layout.tsx";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartItems }: { cartItems: CartItemType[] }) {
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Shopping Cart</div>
        {isShopPage && (
          <>
            <p>Items in your cart: {cartItemCount}</p>
            <Link to="/cart" className="hover:bg-blue-600 hover:text-white px-4 py-2 rounded"><FaShoppingCart /></Link>
          </>
        )}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;