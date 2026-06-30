import { useState } from "react"

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
    <div>ProductCard</div>
  )
}

export default ProductCard