import "./Product.css";
import selection from "../../../weapons/selection";
import { useState } from "react";

const Product = ({ product, cartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState(1);

  const weapon = selection.find(
    (item) => item.name.toLowerCase() === product.name.toLowerCase()
  );

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = (product) => {
    const productToCart = {
      name: product.name,
      img: product.image,
      category: product.category,
      value: weapon.value,
      quantity: quantity,
    };

    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, productToCart]);
    }
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p className="weapon-description">{product.description}</p>
      <div className="stats-tables">
        <div className="attack-defence">
          <table className="attack">
            <thead>
              <tr>
                <th colSpan="2">Attack</th>
              </tr>
            </thead>
            <tbody>
              {product.attack.map((type) => (
                <tr key={type.name}>
                  <td>{type.name}</td>
                  <td>{type.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="defence">
            <thead>
              <tr>
                <th colSpan="2">Guard</th>
              </tr>
            </thead>
            <tbody>
              {product.defence.map((type) => (
                <tr key={type.name}>
                  <td>{type.name}</td>
                  <td>{type.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="scaling-requirements">
          <table className="scaling">
            <thead>
              <tr>
                <th colSpan="2">Scaling</th>
              </tr>
            </thead>
            <tbody>
              {product.scalesWith.map((type) => (
                <tr key={type.name}>
                  <td>{type.name}</td>
                  <td>{type.scaling}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="requirements">
            <thead>
              <tr>
                <th colSpan="2">Requires</th>
              </tr>
            </thead>
            <tbody>
              {product.requiredAttributes.map((type) => (
                <tr key={type.name}>
                  <td>{type.name}</td>
                  <td>{type.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="weapon-category">{product.category}</p>
      <table className="weapon-weight">
        <tbody>
          <tr>
            <td>Weight</td>
            <td>{product.weight}</td>
          </tr>
        </tbody>
      </table>
      <table className="weapon-value">
        <tbody>
          <tr>
            <td>Runes</td>
            <td>{weapon.value}</td>
          </tr>
        </tbody>
      </table>
      <div className="add-to-cart-container">
        <input
          type="number"
          step="1"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
