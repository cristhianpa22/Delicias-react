import { getProducts} from "../services/productApi";
import Loading from "../components/loading";
import Alert from "../components/alert";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Hero from "../components/hero";
import ProductList from "../components/listCard";
import CardShop from "../components/cardShop";

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
                console.error(err);
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            
            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}
            <Modal title="CARRITO DE COMPRAS" isOpen={isOpenCarrito} onClose={closeModalCarrito}>
                <CardShop/>
            </Modal>

            <Hero />
            <ProductList products={products} />

        </div>
    );

}


