import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="simple-page home-page">
      <h1>Welcome to Urban Style</h1>
      <p>Find simple and comfortable clothes for everyday life.</p>
      <Link className="page-button" to="/products">
        See Products
      </Link>
    </main>
  );
}

export default Home;
