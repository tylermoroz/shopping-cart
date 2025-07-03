import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Products/Product.css";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [cartTotal, setCartTotal] = useState(0);

  const [inputValues, setInputValues] = useState(() => {
    const map = {};
    cartItems.forEach((item) => {
      map[item.name] = item.quantity.toString();
    });
    return map;
  });

  const handleCartTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.value * item.quantity,
      0
    );
    setCartTotal(total);
  };

  const handleOnChange = (name, value) => {
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleItemCount = (itemToUpdate, amount) => {
    if (isNaN(amount) || amount < 1) return;

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
      const removedItem = newItems[indexToRemove];
      newItems.splice(indexToRemove, 1);

      setInputValues((prevInputs) => {
        const updatedInputs = { ...prevInputs };
        delete updatedInputs[removedItem.name];
        return updatedInputs;
      });

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
                <div className="item-control-container">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={inputValues[item.name] ?? item.quantity}
                    onChange={(e) => handleOnChange(item.name, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.target.blur();
                      }
                    }}
                    onBlur={() => handleItemCount(item, inputValues[item.name])}
                  />
                  <button onClick={() => removeFromCart(index)}>
                    Remove from cart
                  </button>
                </div>
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
