import Layout from "./Layout.tsx";
import CartItemList from "../components/CartItemList.tsx";

function Cart() {
  return (
    <Layout>
      {({ cartItems, setCartItems }) => (
        <CartItemList cartItems={cartItems} setCartItems={setCartItems}
        />
      )}
    </Layout>
  );
}

export default Cart;