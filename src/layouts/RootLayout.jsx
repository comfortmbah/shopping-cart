import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar cart={cart} />
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  )
}

export default RootLayout