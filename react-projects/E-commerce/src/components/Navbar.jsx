
import { Link } from "react-router-dom";
function Navbar(){

    return (
        <nav className="navbar">
            <div className="nav-inner">
                <h2>ShopSmart</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;