import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Get initial search from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchTerm(query);
      handleSearch(query);
    }
  }, [location]);

  // All products data (same as Home)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const productsData = [
        { id: 1, name: 'iPhone 16 Pro', price: 99999, category: 'phone', 
          pexelsQuery: 'iphone 16 pro realistic product photography',
          image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg' },
        { id: 2, name: 'MacBook Pro M3', price: 199999, category: 'laptop', 
          image: 'https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg' },
        { id: 3, name: 'iPad Pro', price: 89999, category: 'tablet', 
          image: 'https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg' },
        { id: 4, name: 'Headphones Pro 3', price: 24999, category: 'headphones', 
          image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg' },
        { id: 5, name: 'Apple Watch Ultra', price: 79999, category: 'smartwatch', 
          image: 'https://images.pexels.com/photos/7239986/pexels-photo-7239986.jpeg' },
        { id: 6, name: 'iPhone 16', price: 79999, category: 'phone', 
          image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg' },
        { id: 7, name: 'MacBook Air', price: 129999, category: 'laptop', 
          image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg' },
        { id: 8, name: 'AirPods Max', price: 49999, category: 'headphones', 
          image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg' },
        { id: 9, name: 'iPad Air', price: 59999, category: 'tablet', 
          image: 'https://images.pexels.com/photos/33632618/pexels-photo-33632618.jpeg' },
        { id: 10, name: 'Apple Watch SE', price: 29999, category: 'smartwatch', 
          image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg' },
        { id: 11, name: 'iPhone 15 Pro', price: 89999, category: 'phone', 
          image: 'https://images.pexels.com/photos/18403791/pexels-photo-18403791.jpeg' },
        { id: 12, name: 'Mac Mini M2', price: 59999, category: 'laptop', 
          image: 'https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg' }
      ];
      setAllProducts(productsData);
      setProducts(productsData);
      setLoading(false);
    }, 800);
  }, []);

  const handleSearch = (term) => {
    setLoading(true);
    setTimeout(() => {
      if (!term.trim()) {
        setProducts(allProducts);
        setNoResults(false);
      } else {
        const filtered = allProducts.filter(product =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
        setProducts(filtered);
        setNoResults(filtered.length === 0);
      }
      setLoading(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`?q=${encodeURIComponent(searchTerm)}`);
      handleSearch(searchTerm);
    }
  };

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* SEARCH HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6, #10b981)', 
                     WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          🔍 Search Products
        </h1>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.1)',
            padding: '1.5rem', borderRadius: '3rem', backdropFilter: 'blur(20px)'
          }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search iPhone, MacBook, AirPods..."
              style={{
                flex: 1, padding: '1rem 1.5rem', fontSize: '1.5rem',
                background: 'transparent', border: 'none', color: 'white',
                outline: 'none'
              }}
            />
            <button type="submit" style={{
              padding: '1rem 2rem', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white', border: 'none', borderRadius: '2rem',
              fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
              Find Products
            </button>
          </div>
        </form>

        {searchTerm && (
          <p style={{ fontSize: '1.2rem', marginTop: '1rem', opacity: 0.9 }}>
            Showing results for "{searchTerm}"
          </p>
        )}
      </div>

      {/* RESULTS */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🔍</div>
          <h2 style={{ fontSize: '2.5rem' }}>Searching products...</h2>
        </div>
      ) : noResults ? (
        <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
          <div style={{ fontSize: '8rem', marginBottom: '2rem', opacity: 0.5 }}>📦</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            No products found for "{searchTerm}"
          </h2>
          <Link to="/" style={{
            padding: '1.5rem 3rem', background: '#10b981', color: 'white',
            textDecoration: 'none', borderRadius: '2rem', fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>
            ← Browse All Products
          </Link>
        </div>
      ) : (
        <div>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
            Found {products.length} {products.length === 1 ? 'product' : 'products'}
          </div>

          {/* PRODUCTS GRID */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {products.map(product => (
              <div key={product.id} style={{
                background: 'rgba(255,255,255,0.1)', padding: '2rem',
                borderRadius: '1.5rem', backdropFilter: 'blur(10px)',
                textAlign: 'center', transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%', height: '250px', objectFit: 'cover',
                    borderRadius: '1rem', marginBottom: '1.5rem'
                  }}
                />
                
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                  {product.name}
                </h3>
                
                <div style={{ 
                  fontSize: '2rem', fontWeight: 'bold', color: '#10b981', 
                  marginBottom: '1.5rem' 
                }}>
                  ₹{product.price.toLocaleString()}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Link to={`/product/${product.id}`} style={{
                    padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.2)',
                    color: 'white', textDecoration: 'none', borderRadius: '1rem',
                    fontWeight: '500'
                  }}>
                    View Details
                  </Link>
                  
                  <button onClick={() => addToCart(product)} style={{
                    padding: '0.8rem 1.5rem', background: '#10b981',
                    color: 'white', border: 'none', borderRadius: '1rem',
                    fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
