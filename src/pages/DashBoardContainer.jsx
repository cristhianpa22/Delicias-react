import { getProducts, createProduct, updateProduct, removeProduct } from "../services/productApi";
import { useEffect, useState } from "react";
import useModal from "../hooks/useModal";
import DashBoard from "./Dashboard";

export default function DashBoardContainer() {
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
            }, 5000);

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
            }, 5000);
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
        finally {
            setTimeout(() => {
                setSuccessMessage();
                setSubmitError();
            }, 5000);
        }
    }

    return(
        <DashBoard
            products={products}
            loading={loading}
            error={error}
            isOpen={isOpen}   
            submitError={submitError}
            successMessage={successMessage}
            openModal={openModal}
            closeModal={closeModal}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
        />
    )

}




