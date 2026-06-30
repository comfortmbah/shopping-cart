import { NavLink } from "react-router-dom"

const Navbar = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>Navbar</div>
  )
}

export default Navbar