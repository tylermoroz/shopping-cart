import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop/cart">
              🛒
              {cartItems.length > 0 && <span>{totalItemsInCart}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet context={{ cartItems, setCartItems }} />
      </main>
      <footer>
        <p>© 2025 Elden Gear Inc. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
