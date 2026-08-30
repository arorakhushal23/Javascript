import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="discount-badge">
          {product.discount}% OFF
        </span>

        <button className="wishlist-button">
          ♡
        </button>

      </div>

      <div className="product-details">

        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="rating">
          <span>★</span>
          {product.rating}
          <small>({product.reviews})</small>
        </div>

        <div className="price-container">

          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="original-price">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>

        </div>

        <button className="cart-button">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;