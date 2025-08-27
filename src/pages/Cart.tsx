import Layout from "./Layout.tsx";
import CartItemList from "../components/CartItemList.tsx";
import type {CartItemType} from "../App.tsx";

function Cart({cartItems, setCartItems}: {
    cartItems: CartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}) {
    return (
            <CartItemList cartItems={cartItems} setCartItems={setCartItems}/>
    );
}

export default Cart;