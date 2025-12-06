import { getProducts } from "../services/productApi";
import Loading from "../components/loading";
import Alert from "../components/alert";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Hero from "../components/hero";
import ProductList from "../components/listCard";
const categories = ["Tartas", "Galletas", "Cupcakes", "Bebidas", "Reposteria", "Panaderia"];

export default function ProductTienda({ isOpenCarrito, closeModalCarrito }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [filters, setFilters] = useState({
        searchTerm: "",
        category: "all"
    });


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

    const filteredProducts = (product) => {
        return product.filter(product => {
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

    return (
        <div>

            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}
            <Modal title="Carrito de compras" isOpen={isOpenCarrito} onClose={closeModalCarrito}>
                <h2>productos</h2>

            </Modal>

            <Hero />
            <ProductList products={filteredProductsList} >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            value={filters.searchTerm}
                            onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                            className="w-full p-3 pl-10 bg-rose-100 border border-rose-300 focus:ring-rose-500 focus:border-rose-500 text-black transition"
                            disabled={loading}
                        />
                        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                    </div>
                    <div className="flex items-center space-x-2">

                        <select name="category"
                            id="category"
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                            className="w-full p-3 pl-10 bg-rose-100 border border-rose-300 focus:ring-rose-500 focus:border-rose-500 text-black transition"
                        >
                            <option value="all">Todas las Categorías</option>
                            {categories.map((category) => (
                                <option key={category} value={category.toLowerCase()}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </ProductList >

        </div >
    );

}


