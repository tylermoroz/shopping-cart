import { useState, useEffect } from "react";
import Product from "./Product.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
