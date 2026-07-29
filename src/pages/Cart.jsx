import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity } = useCart();

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      return item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    })

    setCart(updatedCart);
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function clearCart() {
    const confirmClear = window.confirm("Are you sure you want to clear your cart?");
    if (confirmClear) {
      setCart([]);
    }
  }

  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Your Cart is Empty
        </h2>
        <p className="mt-3 text-gray-600 max-w-md">
          Add some products from the shop
        </p>

        <Link
          to={'/shop'}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Start Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-3 flex flex-col items-center justify-between md:flex-row">
        <h1 className="mb-8 text-4xl font-bold text-slate-800">
          Shopping Cart
        </h1>

        <Link to="/shop" 
          className="mt-3 mb-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-md md:flex-row md:items-center md:text-left
              transition duration-300 hover:scale-101 hover:shadow-xl"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="h-32 w-32 object-contain mx-auto md:mx-0" 
            />

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg font-semibold"> 
                {item.title}
              </h2>

              <p className="mt-2 text-blue-600 font-bold">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity === 1}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600
                  disabled:bg-red-300"
              >
                -
              </button>

              <span className="text-xl font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded bg-green-500 px-2 py-2 text-white hover:bg-green-600"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="rounded bg-slate-800 px-4 py-2 text-white hover:text-slate-900"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-slate-100 p-6 shadow-md w-1/3">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Cart Summary
        </h2>

        <div className="space-y-4">
          <div className="flex gap-10">
            <span>Total Items</span>
            <span>{totalItem}</span>
          </div>

          <div className="flex gap-10">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-10">
            <span>Shipping</span>
            <span className="text-green-600 font-semibold">Free</span>
          </div>

          <hr />

          <div className="flex gap-10 font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={clearCart}
          className="mt-6 w-1/2 rounded-lg bg-red-600 py-3 font-semibold text-white
            transition hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </section>
  )
} 

export default Cart

