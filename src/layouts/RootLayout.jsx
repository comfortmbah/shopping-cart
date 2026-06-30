import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'
import { jsxs } from 'react/jsx-runtime';

const RootLayout = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);

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