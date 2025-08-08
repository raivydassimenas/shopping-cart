function CartItem({ cartItem, setCartItems }) {
  const handleRemove = () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItem.id));
  };

  return (
    <div className="cart-item">
      <h3>{cartItem.name}</h3>
      <p>Price: ${cartItem.price.toFixed(2)}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;