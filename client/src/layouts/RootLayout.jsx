import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';


const RootLayout = () => {
  

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout