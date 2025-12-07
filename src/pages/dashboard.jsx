import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { getProducts, createProduct, updateProduct, removeProduct } from "../services/productApi";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ProductForm from "../components/ProductForm";
import useModal from "../hooks/useModal";
import Table from "../components/Table";

export default function DashBoard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, openModal, closeModal] = useModal();
    const [submitError, setSubmitError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.error(err);
                setError("Error al cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    async function handleAddProduct(product) {

        try {
            const created = await createProduct(product);
            setProducts(prev => [...prev, created]); // añadir al array existente
            setSubmitError(null); // limpiar posible error previ
            setSuccessMessage("Producto creado con éxito.");
            closeModal();

        } catch (err) {
            console.error(err);
            setSubmitError("Error al crear el producto");
        }
        finally {
            setTimeout(() => {
                setSuccessMessage();
                setSubmitError();
            },5000);

        }

    }
    async function handleUpdateProduct(id, product) {
        try {
            const updated = await updateProduct(id, product);
            setProducts(prev => prev.map(p => p.id === id ? updated : p));
            setSubmitError(null);
            setSuccessMessage("Producto actualizado con éxito.");
        } catch (err) {
            console.error(err);
            setSubmitError("Error al actualizar el producto");
        }
        finally {
            setTimeout(() => {
                setSuccessMessage();
                setSubmitError();
            },5000);
        }
    }
    async function handleDeleteProduct(id) {
        try {
            await removeProduct(id);
            setProducts(prev => prev.filter(p => p.id !== id));
            setSubmitError(null);
            setSuccessMessage("Producto eliminado con éxito.");
        } catch (err) {
            console.error(err);
            setSubmitError("Error al eliminar el producto");
        }
        finally{
            setTimeout(() => {
                setSuccessMessage();
                setSubmitError();
            },5000);
        }
    }

    return (
        <div className=" bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 p-8">
            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif text-rose-900 mb-2">Gestión de Productos</h1>
                    <p className="text-rose-700 italic">Pastelería Artesanal</p>
                    <Modal title="Agregar Nuevo Producto" isOpen={isOpen} onClose={closeModal}>
                        <ProductForm onSubmit={handleAddProduct} submitError={submitError} />
                    </Modal>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-rose-100">
                    <div className="p-6 bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 flex justify-between items-center">
                        <h2 className="text-2xl font-serif text-rose-900">Nuestros Productos</h2>
                        <button
                            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                            onClick={openModal}
                            aria-label="Agregar Nuevo Producto"
                        ><i className="fa-solid fa-plus mr-2"></i>
                            Agregar Producto
                        </button>
                    </div>



                    <Table products={products} onUpdateProduct={handleUpdateProduct} onDeleteProduct={handleDeleteProduct} submitError={submitError} successMessage={successMessage} />
                    <div className="mt-6 text-center text-rose-700 text-sm italic">
                        {products.length} productos en el catálogo
                    </div>


                </div>
            </div>
        </div>
    );
}