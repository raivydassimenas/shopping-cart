import Layout from "./Layout.tsx";
import CartItemList from "../components/CartItemList.tsx";
import type { LayoutProps } from "./Layout.tsx";
import type { CartItem } from "./Layout.tsx";

function Shop() {
  return (
    <Layout>
      {({ cartItems, setCartItems }: LayoutProps) => (
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-lg">Explore our collection of products.</p>
          <CartItemList cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      )}
    </Layout>
  );
}

export default Shop;