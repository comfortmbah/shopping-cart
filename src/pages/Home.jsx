import heroImage from '../assets/hero.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='min-h-[calc(100vh-80px)] flex items-center'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div>
          <p className='text-blue-600 font-semibold uppercase tracking-widest mb-2'>
            Welcome to ShopCart
          </p>
          <h1 className='text-4xl md:text-6xl font-bold text-slate-800 leading-tight'>
            Discover Amazing Products at Great Prices
          </h1>
          <p className='mt-6 text-lg text-slate-600'>
            Shop the latest fashion, electronics, accessories, and more.
            Find quality products you will love-all in one place.
          </p>

          <Link
            to={'/shop'}
            className='inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300'
          >
            Shop Now
          </Link>
        </div>

        <div className='flex justify-center'>
          <img src={heroImage} alt="shopping" 
            className='w-full max-w-md rounded-2xl shadow-xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Home