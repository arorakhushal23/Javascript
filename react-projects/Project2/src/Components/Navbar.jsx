import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">
          Urban<span>Style</span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Men</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
          <a href="#">Shoes</a>
        </div>

        <div className="nav-actions">

          <button className="nav-icon">
            🔍
          </button>

          <button className="nav-icon">
            ♡
          </button>

          <button className="nav-icon cart-icon">
            🛒
            <span>0</span>
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;