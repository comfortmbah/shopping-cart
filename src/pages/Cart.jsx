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
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Your Cart is Empty
        </h1>
        <p className="mt-4 text-slate-400">
          Add some products from the shop
        </p>
      </section>
    )
  }

  return (
    <div>

    </div>
  )
} 

export default Cart

