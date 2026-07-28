import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    return (
        <CartContext.Provider
          value={{ cart, setCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    return useContext(CartContext)
}

export { CartProvider, useCart }