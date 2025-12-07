import { Check, Cookie, Cake } from 'lucide-react';
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import Hero from "../components/Hero";
import ProductList from "../components/ListCard";
import CardShop from "../components/CardShop";
import { formatCurrency } from "../utils/utilitis"


export default function ProductTienda({
    product,
    loading,
    error,
    filters,
    categorie,
    subTotal,

    isOpenCarrito,
    isOpenTotal,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    onFliterChange,
    onCloseCarrito,
    onCloseVentaExitosa,
    onCompra,
}) {
    const handleSearchChange = (e) => {
        onFliterChange({
            ...filters,
            searchTerm: e.target.value
        });
    };

    const handleCategoryChange = (e) => {
        onFliterChange({
            ...filters,
            category: e.target.value
        });
    };

    return (

        <div>

            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}


            <Modal title="CARRITO DE COMPRAS" isOpen={isOpenCarrito} onClose={onCloseCarrito}>
                <CardShop opencar={onCompra} cartItems={cartItems}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    subTotal={subTotal}
                    clearCart={onCloseVentaExitosa} />
            </Modal>

            <Modal title="Venta exitosa" isOpen={isOpenTotal} onClose={onCloseVentaExitosa}>
                <div className="bg-[#f4e9edcc] rounded-2xl shadow-2xl p-8 text-center transform animate-scale-in">
                    {/* Círculo de check animado */}
                    <div className="relative mx-auto mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center animate-bounce-in">
                            <Check className="w-8 h-8 text-white animate-check-mark" strokeWidth={3} />
                        </div>
                        <div className="absolute inset-0 w-24 h-24 bg-green-400 rounded-full animate-ping opacity-20 mx-auto" />
                    </div>

                    <h2 className="text-3xl font-perfect text-gray-800 mb-3 animate-fade-in-up">
                        ¡Venta Exitosa!
                    </h2>

                    <p className="text-gray-600 mb-6 font-hello animate-fade-in-up-delay">
                        Tu pedido ha sido registrado correctamente
                    </p>

                    <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 mb-6 animate-fade-in-up-delay-2">
                        <Cookie className="w-12 h-12 text-pink-500 animate-bounce mx-auto mb-3" />
                        <p className="text-2xl font-perfect text-gray-800 mb-1">{formatCurrency(subTotal)}</p>
                        <p className="text-sm font-hello text-gray-600">Total pagado</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 animate-fade-in-up-delay-3">
                        <Cake className="w-4 h-4" />
                        <span>¡Gracias por tu compra!</span>
                    </div>
                </div>

            </Modal >

            <Hero />
            <ProductList products={product} >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            value={filters.searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-3 pl-10 bg-rose-100 border-2 border-rose-500 rounded-2xl focus:ring-rose-500 focus:border-rose-500 text-black transition"
                            disabled={loading}
                        />
                        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                    </div>
                    <div className="flex items-center space-x-2">

                        <select name="category"
                            id="category"
                            value={filters.category}
                            onChange={handleCategoryChange}
                            className="w-full p-3 pl-10 bg-rose-100 border-2 border-rose-500 rounded-2xl focus:ring-rose-500 focus:border-rose-500 text-black transition"
                        >
                            <option value="all">Todas las Categorías</option>
                            {categorie.map((category) => (
                                <option key={category} value={category.toLowerCase()}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </ProductList >
        </div>

    );

}


