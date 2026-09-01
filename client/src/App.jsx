
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Shop from "./pages/Shop";
import RootLayout from "./layouts/RootLayout"
import ProductDetails from './pages/ProductDetails';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path='product/:id' element={<ProductDetails />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App