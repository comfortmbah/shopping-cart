import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      })
    }


    return (
        <CartContext.Provider
          value={{ cart, addToCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    return useContext(CartContext)
}

export { CartProvider, useCart }