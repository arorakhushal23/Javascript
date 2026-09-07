import products from "../data/products";
import ProductGrid from "../Components/ProductGrid";

function Products() {
  return (
    <main className="products-page">
      <section className="products-header">
        <h1>Our Products</h1>
        <p className="section-description">Choose your favorite product.</p>
      </section>

      <ProductGrid products={products} />
    </main>
  );
}

export default Products;
