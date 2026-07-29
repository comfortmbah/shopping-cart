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

    function increaseQuantity(id) {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: id,
      })
    }

    function decreaseQuantity(id) {
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: id,
      })
    }

    function removeItem(id) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: id,
      })
    }

    function clearCart() {
      const confirmClear = window.confirm("Are you sure you want to clear your cart?");
      if (confirmClear) {
        dispatch({
          type: "CLEAR_CART",
        })
      }
    }

    return (
        <CartContext.Provider
          value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    return useContext(CartContext)
}

export { CartProvider, useCart }