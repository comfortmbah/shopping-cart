import  Loading  from '../components/Loading'
import  Error  from '../components/Error'
import UseFetchProducts from '../hooks/UseFetchProducts'
import ProductCard from '../components/ProductCard'
import { useState, useRef, useEffect } from 'react'
import { MdClear } from 'react-icons'

const Shop = () => {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { products, loading, error } = UseFetchProducts();
  const [showMessage, setShowMessage] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (!loading && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [loading]);

  function showSuccessMessage() {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

  function clearSearch() {
    setSearchTerm("");
    searchInputRef.current.focus();
  }

  const categories = [
    "all", ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...searchedProducts];


  if (sortOption === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "title") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className='mb-2 text-4xl font-bold text-slate-800'>
        Shop Products
      </h1>
      <p className='mb-8 text-slate-600'>
        Browse our collection and add your favorite products to the cart.
      </p>

      {showMessage && (
        <div className='fixed top-24 right-6 z-50 rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg'>
          Product added to cart!
        </div>
      )}

      <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-center'>
        <div className='flex items-center gap-3'>
          <label
            htmlFor='search'
            className='font-semibold text-gray-700'
          >
            Search: 
          </label>

          <input 
            type="text" 
            ref={searchInputRef}
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
          />

          {searchTerm && (
            <button
              onClick={clearSearch}
              className='absolute right-3 top-1/2 -translate-y-0.5 text-gray-500 transition hover:text-gray-800'
              aria-label='Clear search'
            >
              <MdClear size={20} />
            </button>
          )}
        </div>

        <div className='flex items-center gap-3'>
          <label 
            htmlFor="sort"
            className='font-semibold text-gray-700'
          >
            Sort by:
          </label>

          <select
            id='sort'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className='rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
          >
            <option value="default">Default</option>
            <option value="low-high">
              Price: Low to High
            </option>
            <option value="high-low">
              Price: High to Low
            </option>
            <option value="title">
              Title: A-Z
            </option>
          </select>
        </div>

        <div className='flex items-center gap-3'>
          <label 
            htmlFor="category"
            className='font-semibold text-gray-700'
          >
            Category:
          </label>

          <select
            id='category'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      

      <p className='mb-6 text-lg font-medium text-gray-700'>
        Showing {sortedProducts.length} products
      </p>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showSuccessMessage={showSuccessMessage}
          />
        ))}
      </div>
    </section>
  )
}

export default Shop