import "./Shoppage.css";
import ProductList from "./Products/ProductList.jsx";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";

const Shoppage = () => {
  const location = useLocation();
  const isCartOpen = location.pathname.endsWith("/cart");
  const { cartItems, setCartItems } = useOutletContext();

  return (
    <>
      <div className="shop-page-container">
        <div className="shop-content-container">
          <div className="store-container">
            <h1>Elden Gear Inventory</h1>
            <ProductList cartItems={cartItems} setCartItems={setCartItems} />
          </div>
          {isCartOpen && (
            <div className="outlet-container">
              <Outlet context={{ cartItems }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shoppage;
