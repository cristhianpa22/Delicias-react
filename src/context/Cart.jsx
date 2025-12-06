import { useState,createContext } from "react";

export const ProductContext = createContext();

export default function ProductTienda({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const ProductInCart = cartItems.find(item => item.id === product.id);
        
        
        setCartItems(prevState =>{
            const productExist = prevState.find(item => item.id === product.id)
            

            if(productExist){
                return prevState.map(item => item.id === product.id ? {...item, quantity: item.quantity +1}: item)
            }

            return [...prevState, {...product, quantity: 1}]
        });

        

    };
    const increaseQuantity = (productId) => {
        setCartItems(prevState =>
            prevState.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prevState =>
            prevState.map(item => {
                if (item.id === productId) {
                    // Si la cantidad es 1, eliminar el producto
                    if (item.quantity <= 1) {
                        return null; // Se filtrará después
                    }
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter(item => item !== null) // Eliminar los null
        );
    };

    const removeFromCart = (productId) => {
        setCartItems(prevState =>
            prevState.filter(item => item.id !== productId)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };
    const subTotal = cartItems.reduce((total, item) => {
        const precio = Number(item.precio) || 0;
        return total + (precio * item.quantity);
      }, 0);

    return(
        <ProductContext.Provider value={{ cartItems, addToCart, increaseQuantity,decreaseQuantity,removeFromCart,subTotal,clearCart }} >
            {children}
            
        </ProductContext.Provider>
    )
}