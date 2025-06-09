const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.weight}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default Product;
