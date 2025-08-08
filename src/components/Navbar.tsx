import { Link, useLocation } from "react-router-dom";
import type { CartItem } from "../pages/Layout.tsx";

function Navbar({ cartItems }: { cartItems: CartItem[] }) {
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Shopping Cart</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
        </ul>
        {isShopPage && (
          <>
            <p>Items in your cart: {cartItems.length}</p>
            <Link to="/cart" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">My cart</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;