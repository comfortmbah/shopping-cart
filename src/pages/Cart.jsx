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
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold text-slate-800">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-md md:flex-row md:items-center"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="h-32 w-32 object-contain" 
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                {item.title}
              </h2>

              <p className="mt-2 text-blue-600 font-bold">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
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

      <div className="mt-10 rounded-xl bg-slate-100 p-6">
        <h2 className="text-2xl font-bold">
          Total Items: {totalItem}
        </h2>

        <h2 className="mt-3 text-2xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </section>
  )
} 

export default Cart

