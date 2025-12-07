import { getProducts } from "../services/productApi";
import { useEffect, useState } from "react";
import useModal from "../hooks/useModal"
import { useCart } from "../hooks/useCart";
import ProductTienda from "./pruducTienda";


const categories = ["Tartas", "Galletas", "Cupcakes", "Bebidas", "Reposteria", "Panaderia"];

export default function ProductTiendaContainer({isOpenCarrito, closeModalCarrito}){

    const{cartItems,increaseQuantity,decreaseQuantity,removeFromCart,subTotal, clearCart}=useCart();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
       searchTerm: "",
        category: "all"
    })

    const [isOpenTotal, openTotal, closeModalTotal] = useModal();


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getProducts();

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

    const filteredProducts = (productList) => {
        return productList.filter(product => {
            return (
                (filters.category === "all" || product.categoria.toLowerCase() === filters.category) &&
                (filters.searchTerm === "" ||
                    product.nombre.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                    product.descripcion.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                    product.precio.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())

                )
            );
        });
    }
    const filteredProductsList = filteredProducts(products);

    const handleFilterChange=(newFilter)=>{
        setFilters(newFilter)
    }


    const handleCloseVentaExitosa = () => {
        closeModalTotal()
        clearCart() 
       // Limpiar el carrito al cerrar
    }
    const compra = () => {
        closeModalCarrito()
        openTotal()
    
    }
    
    return (
        <ProductTienda 
        product={filteredProductsList}
        loading={loading}
        error={error}
        filters={filters}
        categorie={categories}
        subTotal={subTotal}
        
        isOpenCarrito={isOpenCarrito}
        isOpenTotal={isOpenTotal}

        
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}

        onCloseCarrito={closeModalCarrito}
        onFliterChange={handleFilterChange}
        onCloseVentaExitosa={handleCloseVentaExitosa}
        onCompra={compra}
        />
        
    )
}