const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <table border="1" style={{ color: "white", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan="2">Attack</th>
          </tr>
        </thead>
        <tbody>
          {product.attack.map((type) => (
            <tr>
              <td key={type.name}>{type.name}</td>
              <td key={type.amount}>{type.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table border="1" style={{ color: "white", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan="2">Guard</th>
          </tr>
        </thead>
        <tbody>
          {product.defence.map((type) => (
            <tr>
              <td key={type.name}>{type.name}</td>
              <td key={type.amount}>{type.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table border="1" style={{ color: "white", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan="2">Scaling</th>
          </tr>
        </thead>
        <tbody>
          {product.scalesWith.map((type) => (
            <tr>
              <td key={type.name}>{type.name}</td>
              <td key={type.scaling}>{type.scaling}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table border="1" style={{ color: "white", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan="2">Requires</th>
          </tr>
        </thead>
        <tbody>
          {product.requiredAttributes.map((type) => (
            <tr>
              <td key={type.name}>{type.name}</td>
              <td key={type.amount}>{type.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{product.category}</p>
      <table border="1" style={{ color: "white", borderCollapse: "collapse" }}>
        <tr>
          <td>Weight</td>
          <td>{product.weight}</td>
        </tr>
      </table>
    </div>
  );
};

export default Product;
