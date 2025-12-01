import { getProducts, createProduct, updateProduct, removeProduct } from "../services/productApi";
import { useEffect, useState } from "react";

export default function ProductTienda() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log(data);
                setProducts(data);
            } catch (err) {
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

}
