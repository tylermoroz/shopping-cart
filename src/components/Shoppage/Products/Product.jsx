import "./Product.css";
import selection from "../../../weapons/selection";

const Product = ({ product, cartItems, setCartItems }) => {
  const weapon = selection.find(
    (item) => item.name.toLowerCase() === product.name.toLowerCase()
  );

  const handleAddToCart = () => {
    setCartItems([...cartItems, product.name]);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
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
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
