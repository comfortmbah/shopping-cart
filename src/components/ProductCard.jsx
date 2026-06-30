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
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard