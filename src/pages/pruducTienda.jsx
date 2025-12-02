import { getProducts, createProduct, updateProduct, removeProduct } from "../services/productApi";
import Loading from "../components/loading";
import Alert from "../components/alert";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

export default function ProductTienda( { isOpenCarrito, closeModalCarrito } ) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
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

    return (
        <div>
            <h1>Product Tienda</h1>
            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <alert variant="error">{error}</alert>}
            <Modal title="Carrito de compras" isOpen={isOpenCarrito} onClose={closeModalCarrito}>
                <h2>productos</h2>
                
            </Modal>
        </div>
    );

}


