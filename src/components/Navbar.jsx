import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

const Navbar = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          ShopCart
        </h1>

        <div className="flex items-center gap-6">
          <NavLink
            to={'/'}
            className={({ isActive }) => isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-600 transition'
            }
          >
            Home
          </NavLink>

          <NavLink
            to={'/shop'}
            className={({ isActive }) => isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-600 transition'
            }
          >
            Shop
          </NavLink>

          <NavLink
            to={'/cart'}
            className={({ isActive }) => isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-600 transition'
            }
          >
            Cart {totalItems}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar