import { getProducts } from "../services/productApi";
import { Check, Cookie, Cake } from 'lucide-react';
import Loading from "../components/loading";
import Alert from "../components/alert";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Hero from "../components/hero";
import ProductList from "../components/listCard";
import CardShop from "../components/cardShop";
import useModal from "../hooks/useModal"
import { useCart } from "../hooks/useCart";





export default function ProductTienda({ isOpenCarrito, closeModalCarrito }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isOpenTotal, openTotal, closeModalTotal] = useModal();

    const {subTotal,clearCart}= useCart();







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


    const handleCloseVentaExitosa = () => {
        closeModalTotal()
        clearCart() 
       // Limpiar el carrito al cerrar
    }
    const compra = () => {
        closeModalCarrito()
        openTotal()
    
    }
    const formatCurrency = (valor) => {
        const numero = Number(valor) || 0;
        // Usa toLocaleString() con configuración de Colombia
        return numero.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0  // Sin decimales (los pesos no usan centavos)
        });
    };



    

    return (

        <div>

            {loading && <Loading text="Cargando la lista de dulces pasteles..." />}
            {error && <Alert variant="error">{error}</Alert>}
            <Modal title="CARRITO DE COMPRAS" isOpen={isOpenCarrito} onClose={closeModalCarrito}>
                <CardShop opencar={compra} />
            </Modal>

            <Modal title="Venta exitosa" isOpen={isOpenTotal} onClose={handleCloseVentaExitosa}>
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
            


            <ProductList products={products} />

        </div >
        

    );

}


