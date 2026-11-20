import {useState,useEffect,useContext} from 'react';
import { CartContext } from "../context/CartContext";
function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [debounce, setDebounce] = useState("");
    const [category, setCategory] = useState("all");
    const { addToCart } = useContext(CartContext);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            setLoading(false);
        })
    },[]);

 useEffect(() => {

const timer = setTimeout(() => {
            setDebounce(search);
        }, 500);

        return () => {
            clearTimeout(timer);
        };

    }, [search]);

const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(debounce.toLowerCase());
    const matchesCategory =
        category == "all" || product.category == category;

    return matchesSearch && matchesCategory;
});
const categories = [
    ...new Set(products.map(product => product.category))
];
    
if(loading){
    return <h2 className="loading">Loading...</h2>
}
else{
    return(
        <main className="products-page">
        <h1>Our Products</h1>
        <div className="products-controls">
<input
    type="text"
    placeholder="Search products.."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
 <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>

            {categories.map(cat => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
        </div>
        <div className="product-grid">
            {filteredProducts.map(product=>(
                <div className="product-card" key={product.id}>
                      <img src={product.thumbnail} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>Category: {product.category}</p>
                      <p>Price: ${product.price}</p>
                       <p>Rating: {product.rating} / 5</p>
                        
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
        </main>
    )
}

}

export default Product;