import { useState } from 'react'
import Navbar from '../components/Navbar';

const RootLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default RootLayout