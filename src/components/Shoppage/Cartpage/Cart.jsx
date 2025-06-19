import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useOutletContext();

  return (
    <>
      <h3>Your Cart</h3>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </>
  );
};

export default Cart;
