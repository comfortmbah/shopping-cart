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

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      return item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    }).filter((item) => item.quantity > 0)

    setCart(updatedCart);
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <div>

    </div>
  )
} 

export default Cart

