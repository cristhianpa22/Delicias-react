import Alert from "./Alert"
import Card from "./Card";
import { useCart } from "../hooks/useCart";


export default function ProductList({ products = [], children }) {
    const isEmpty = !products || products.length === 0;

    const {addToCart}=useCart();
    


    return (
     <cardProvider>
        <section aria-label="Listado de Productos de Pastelería" 
        className="space-y-6 p-8 ">

            {children && (
                <div className="flex flex-wrap items-center gap-4 border-b border-[#6B6B6B] pb-4">{children}</div>
            )}

            {isEmpty ? (
                <Alert variant="info">
                    <h2 className="text-lg font-bold mb-1">¡El horno está vacío!</h2>
                    <p>No se encontraron postres que coincidan con tu búsqueda. Intenta con otra receta.</p>
                </Alert>
            ) : (
                <ul
                    role="list"
                    className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 "
                >

                    {products.map((pasteles) => (
                        <li className="transition duration-300 rounded-xl shadow-md hover:shadow-lg border border-pink-100" 
                        key={pasteles.id} 
                        role="listitem">
                            <Card pasteles={pasteles} onAddToCart={addToCart} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
        </cardProvider>
    );
}
