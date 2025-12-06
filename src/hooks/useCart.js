import {useContext} from "react";
import { ProductContext } from "../context/Cart";

export const useCart = () => {
    const context = useContext(ProductContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a ProductContext");
    }
    return context;
}