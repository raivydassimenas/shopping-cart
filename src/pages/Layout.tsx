import Navbar from "../components/Navbar.tsx";
import { useState } from "react";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type LayoutProps = {
  children: ((props: {
    cartItems: CartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
  }) => React.ReactNode) | React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      <main className="flex-grow p-4">
        {typeof children === "function"
          ? children({ cartItems, setCartItems })
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