function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">₹{product.price}</p>
        <button className="cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;