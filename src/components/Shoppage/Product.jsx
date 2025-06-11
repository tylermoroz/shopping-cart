import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <div className="stats-tables">
        <div className="attack-defence">
          <table className="attack" border="1">
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
          <table className="defence" border="1">
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
          <table className="scaling" border="1">
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
          <table className="requirements" border="1">
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
      <p>{product.category}</p>
      <table border="1">
        <tbody>
          <tr>
            <td>Weight</td>
            <td>{product.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
