import Layout from "./Layout.tsx";
import ShoppingItemList from "../components/ShoppingItemList.tsx";
import type {CartItemType} from "../App.tsx";

function Shop({cartItems, addToCart}: {cartItems: CartItemType[], addToCart: (item: CartItemType[]) => void}) {
  return (
        <ShoppingItemList addToCart={addToCart} />
  );
}

export default Shop;