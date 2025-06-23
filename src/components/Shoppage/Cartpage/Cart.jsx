import { useOutletContext } from "react-router-dom";
import "../Products/Product.css";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useOutletContext();

  return (
    <div>
      <h3>Your Cart</h3>
      <ul>
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
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
