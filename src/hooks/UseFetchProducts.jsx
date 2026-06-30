import { useState, useEffect } from 'react'

const UseFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <div>UseFetchProducts</div>
  )
}

export default UseFetchProducts