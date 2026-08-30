import React from "react";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

function Products() {
  return (
    <main className="products-page">

      <section className="products-header">

        <p className="section-label">
          OUR COLLECTION
        </p>

        <h1>
          Shop Our Products
        </h1>

        <p className="section-description">
          Discover premium clothing and accessories designed
          for your everyday style.
        </p>

      </section>

      <section className="products-section">

        <div className="products-toolbar">

          <p>
            <strong>{products.length}</strong> Products
          </p>

          <select defaultValue="featured">
            <option value="featured">
              Featured
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>
          </select>

        </div>

        <ProductGrid products={products} />

      </section>

    </main>
  );
}

export default Products;