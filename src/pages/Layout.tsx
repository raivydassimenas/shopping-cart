import Navbar from "../components/Navbar.tsx";
import { useState } from "react";

export type CartItemType = {
  id: string;
  title: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type LayoutProps = {
  children: ((props: {
    cartItems: CartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
    addToCart: (item: Omit<CartItemType, "setQuantity" | "addToCart">) => void;
  }) => React.ReactNode) | React.ReactNode;

};

function Layout({ children }: LayoutProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  // Add or update item in cart
  const addToCart = (item: CartItemType) => {
    setCartItems(prev =>
      prev.some(ci => ci.id === item.id)
        ? prev.map(ci =>
          ci.id === item.id
            ? { ...ci, quantity: ci.quantity + item.quantity }
            : ci
        )
        : [...prev, item]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      <main className="flex-grow p-4">
        {typeof children === "function"
          ? children({ cartItems, setCartItems, addToCart })
          : children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          © 2025 Raivydas Šimėnas. All rights reserved.
        </p>
        <p>Photo by <a
          href="https://unsplash.com/@geilanmb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Geilan
          Malet-Bates</a> on <a
          href="https://unsplash.com/photos/stack-of-books-on-white-table-uRLECci4Hl4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}

export default Layout;