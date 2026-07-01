import { useState } from "react"
import PropTypes from "prop-types"

const ProductCard = ({ product, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function handleInputChange(e) {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  }

  function addToCart() {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        return item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      });
      setCart(updatedCart);
    } else {
      setCart([ ...cart, { ...product, quantity }])
    }

    setQuantity(1);
  }

  
  return (
    <div className="flex flex-col rounded-xl bg-white p-5 shadow-lg transition hover:shadow-xl">
      <img 
        src={product.image} 
        alt={product.title}
        className="h-56 w-full object-contain"
      />

      <h2 className="mt-4 line-clamp-2 text-lg font-semibold text-slate-800">
        {product.title}
      </h2>

      <p className="mt-2 text-2xl font-bold text-blue-600">
        ${product.price}
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={decreaseQuantity}
          className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          -
        </button>

        <input 
          type="number" 
          min={'1'}
          value={quantity}
          onChange={handleInputChange}
          className="w-16 rounded border border-gray-300 py-2 text-center outline-none focus:border-blue-500"
        />

        <button
          onClick={increaseQuantity}
          className="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
        >
          +
        </button>
      </div>

      <button
          onClick={addToCart}
          className="mt-6 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Add To Cart
        </button>
    </div>
  );
}

export default ProductCard