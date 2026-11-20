import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

    const { cart } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h1>My Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
              <div className="cart-list">
                {cart.map((product, index) => (
                    <div className="cart-item" key={index}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating} / 5</p>
                            <p>Category: {product.category}</p>
                        </div>
                    </div>
                ))}
              </div>
            )}
        </div>
    );
}

export default Cart;