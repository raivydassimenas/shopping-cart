import Layout from "./Layout.tsx";
import ShoppingItemList from "../components/ShoppingItemList.tsx";

function Shop() {
  return (
    <Layout>
      {({ addToCart }) => (
        <ShoppingItemList addToCart={addToCart}
        />
      )}
    </Layout>
  );
}

export default Shop;