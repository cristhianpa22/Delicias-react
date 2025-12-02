import Loading from "../components/loading";
import Alert from "../components/alert";
import { getProducts, createProduct, updateProduct, removeProduct } from "../services/productApi";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ProductForm from "../components/productForm";


export default function DashBoard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


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

    async function handleAddProduct(product) {

        try {
            const created = await createProduct(products);
            setProducts([...products, created]);
        } catch (err) {
            setError("Failed to create product");
        }
    }


    return (
        <div>
            <h1>Product Dashboard</h1>
            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}

            <button className="py-3 px-6 bg-pink-500 hover:bg-pink-600 text-white font-bold 
            text-lg rounded-xl border-b-4 border-amber-500/80 shadow-lg hover:shadow-xl transition  duration-300 transform hover:translate-y-[-2px] flex items-center justify-center"
                onClick={openModal}
                aria-label="Agregar Nuevo Producto"
            ><i className="fa-solid fa-plus mr-2"></i>
                Agregar Producto</button>
            <Modal title="Agregar Nuevo Producto" isOpen={isOpen} onClose={closeModal}>
                <ProductForm onSubmit={handleAddProduct} />
            </Modal>
        </div>
    );
}