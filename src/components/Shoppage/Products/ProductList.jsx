import { useState, useEffect } from "react";
import Product from "./Product.jsx";
import "./ProductList.css";
import selection from "../../../weapons/selection.js";

const ProductList = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const maxPages = 3;
    const foundWeapons = [];

    const fetchPagesUntilFound = async () => {
      for (let page = 0; page < maxPages; page++) {
        try {
          const res = await fetch(
            `https://eldenring.fanapis.com/api/weapons?limit=100&page=${page}`
          );
          const data = await res.json();

          const matches = data.data.filter((weapon) =>
            selection.some(
              (obj) => obj.name.toLowerCase() === weapon.name.toLowerCase()
            )
          );

          matches.forEach((weapon) => {
            if (!foundWeapons.some((w) => w.id === weapon.id)) {
              foundWeapons.push(weapon);
            }
          });

          if (foundWeapons.length >= selection.length) {
            break;
          }
        } catch (error) {
          console.log("Failed to fetch page:", page, error);
        }
      }
      setProducts(foundWeapons);
      setLoading(false);
    };

    fetchPagesUntilFound();
  }, []);

  return (
    <div className="product-list-container">
      {loading ? (
        <p style={{ color: "white" }}>Loading weapons...</p>
      ) : products.length > 0 ? (
        products.map((p) => (
          <Product
            key={p.id}
            product={p}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))
      ) : (
        <p style={{ color: "white" }}>No weapons found.</p>
      )}
    </div>
  );
};

export default ProductList;
