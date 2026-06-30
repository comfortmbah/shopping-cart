import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  )
}

export default RootLayout