import {useState, useEffect, useCallback} from "react";
import ShoppingItem from "./ShoppingItem.tsx";
import type {ShoppingItemType} from "./ShoppingItem.tsx";
import type {CartItemType} from "../App";

type ShoppingItemListProps = {
    addToCart: (item: CartItemType) => void;
};

type ApiItem = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

function ShoppingItemList({addToCart}: ShoppingItemListProps) {
    const [shoppingItems, setShoppingItems] = useState<ShoppingItemType[]>([]);

    const handleSetQuantity = useCallback((id: string) => (value: number | ((q: number) => number)) => {
        setShoppingItems(items =>
            items.map(item =>
                item.id === id
                    ? {...item, quantity: typeof value === "function" ? value(item.quantity) : value}
                    : item
            )
        );
    }, []);

    useEffect(() => {
        async function fetchShoppingItems() {
            const shoppingItemsData = await fetch("https://fakestoreapi.com/products");
            const shoppingItems = await shoppingItemsData.json();

            setShoppingItems(
                shoppingItems.map((item: ApiItem) => ({
                    ...item,
                    id: String(item.id),
                    quantity: 1,
                    setQuantity: handleSetQuantity(String(item.id)),
                    addToCart: addToCart,
                }))
            );
        }

        fetchShoppingItems();
    }, [addToCart, handleSetQuantity]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {shoppingItems.map((item) => (
                <ShoppingItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    quantity={item.quantity}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    setQuantity={item.setQuantity}
                    addToCart={item.addToCart}
                />
            ))}
        </div>
    );
}

export default ShoppingItemList;