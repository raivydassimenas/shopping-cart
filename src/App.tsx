import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Shop from "./pages/Shop.tsx";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";

export type CartItemType = {
    id: string;
    title: string;
    quantity: number;
    price: number;
    description: string;
    category: string;
    image: string;
}

function App() {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    const addToCart = (item: CartItemType) => {
        setCartItems(prev => {
            const existing = prev.find(ci => ci.id === item.id);
            if (existing) {
                return prev.map(ci =>
                    ci.id === item.id ? {...ci, quantity: ci.quantity + item.quantity} : ci
                );
            }
            return [...prev, {...item}];
        });
    };

    return (
        <Router>
            <Layout cartItems={cartItems}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;