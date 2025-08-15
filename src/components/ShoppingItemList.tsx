import { useState, useEffect } from 'react';
import ShoppingItem from "./ShoppingItem.tsx";
import type { ShoppingItemType } from "./ShoppingItem.tsx";

function ShoppingItemList() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItemType[]>([]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {shoppingItems.map((item) => (
        <ShoppingItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          setQuantity={(quantity) => {
            setShoppingItems((prevItems) =>
              prevItems.map((i) =>
                i.id === item.id ? { ...i, quantity } : i
              )
            );
          }}
        />
      ))}
    </div>
  );
}

export default ShoppingItemList;