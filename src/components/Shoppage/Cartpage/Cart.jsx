import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Products/Product.css";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [cartTotal, setCartTotal] = useState(0);

  const handleCartTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.value * item.quantity,
      0
    );
    setCartTotal(total);
  };

  const handleItemCount = (itemToUpdate, amount) => {
    const updatedCart = cartItems.map((item) => {
      return item.name === itemToUpdate.name
        ? { ...item, quantity: parseInt(amount, 10) }
        : item;
    });
    setCartItems(updatedCart);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(indexToRemove, 1);
      return newItems;
    });
  };

  useEffect(() => {
    handleCartTotal();
  });

  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      <ul className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <h3>{item.name}</h3>
                <img src={item.img} alt={item.name} />
                <p className="weapon-category">{item.category}</p>
                <table className="weapon-value">
                  <tbody>
                    <tr>
                      <td>Runes</td>
                      <td>{item.value}</td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={item.quantity}
                  onChange={(e) => handleItemCount(item, e.target.value)}
                />
                <button onClick={() => removeFromCart(index)}>
                  Remove from cart
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
      <p>Total: {cartTotal} Runes</p>
    </div>
  );
};

export default Cart;
