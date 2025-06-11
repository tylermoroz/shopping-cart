import "./Shoppage.css";
import ProductList from "./ProductList";

const Shoppage = () => {
  return (
    <>
      <div className="shop-page-container">
        <h1>Let's go shopping</h1>
        <div>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Shoppage;
