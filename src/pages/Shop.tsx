import ShoppingItemList from "../components/ShoppingItemList.tsx";
import type {CartItemType} from "../App.tsx";

function Shop({addToCart}: {addToCart: (item: CartItemType) => void}) {
  return (
        <ShoppingItemList addToCart={addToCart} />
  );
}

export default Shop;