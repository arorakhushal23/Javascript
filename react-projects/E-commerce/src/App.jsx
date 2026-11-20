import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {

    return (
        <div className="app">
            <Navbar />
            <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Product />} />
<Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
    );
}

export default App;