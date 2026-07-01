import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      return item.id === id
        ? { ...item, quantity: item.quantity + 1}
        : item
    });

    setCart(updatedCart);
  }
  return (
    <div>

    </div>
  )
} 

export default Cart

