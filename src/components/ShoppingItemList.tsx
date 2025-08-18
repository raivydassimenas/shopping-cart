import { useState, useEffect } from "react";
import ShoppingItem from "./ShoppingItem.tsx";
import type { ShoppingItemType } from "./ShoppingItem.tsx";

function ShoppingItemList() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItemType[]>([]);

  const handleSetQuantity = (id: string) => (value: number | ((q: number) => number)) => {
    setShoppingItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: typeof value === "function" ? value(item.quantity) : value }
          : item
      )
    );
  };

  useEffect(() => {
    const initialItems: ShoppingItemType[] = [
      { id: "1", name: "Apple", quantity: 1, price: 0.5, setQuantity: () => {} },
      { id: "2", name: "Banana", quantity: 1, price: 0.3, setQuantity: () => {} },
      { id: "3", name: "Orange", quantity: 1, price: 0.4, setQuantity: () => {} },
      { id: "4", name: "Grapes", quantity: 1, price: 2.0, setQuantity: () => {} }
    ];

    setShoppingItems(initialItems.map(item => ({
      ...item,
      setQuantity: handleSetQuantity(item.id)
    })));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {shoppingItems.map((item) => (
        <ShoppingItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          setQuantity={handleSetQuantity(item.id)}
        />
      ))}
    </div>
  );
}

export default ShoppingItemList;