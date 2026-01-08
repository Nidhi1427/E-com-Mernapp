import React, { useState, useEffect } from 'react';

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // ✅ STATIC PRODUCTS - NO fetchProduct() ERROR
  useEffect(() => {
    setProducts([
      { id: 1, name: 'iPhone 16 Pro Max', price: 119900, img: 'https://images.unsplash.com/photo-1592899679516-9e2c0fb205a4?w=400&fit=crop' },
      { id: 2, name: 'MacBook Pro M3', price: 179900, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop' },
      { id: 3, name: 'Sony WH-1000XM5', price: 32999, img: 'https://images.unsplash.com/photo-1613040805626-e8b95a9ebaa4?w=400&fit=crop' }
    ]);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '4rem 2rem', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
          🔍 Search Products
        </h1>
        
        {/* SEARCH BAR */}
        <div style={{ 
          background: '#1e293b', 
          padding: '2rem', 
          borderRadius: '2rem', 
          marginBottom: '3rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <input 
            type="text" 
            placeholder="Search iPhone, MacBook, Sony..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              padding: '1.2rem 2rem',
              border: 'none',
              borderRadius: '2rem',
              fontSize: '1.2rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white'
            }}
          />
          <button style={{
            padding: '1.2rem 2.5rem',
            background: 'linear-gradient(45deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            borderRadius: '2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Search
          </button>
        </div>

        {/* RESULTS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} style={{
                background: '#1e293b',
                borderRadius: '1.5rem',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '1rem' }} 
                />
                <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{product.name}</h3>
                <div style={{ fontSize: '2rem', color: '#10b981', fontWeight: 'bold' }}>
                  ₹{product.price.toLocaleString()}
                </div>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  marginTop: '1rem',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  ADD TO CART
                </button>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                No products found for "{searchTerm}"
              </h2>
              <p style={{ opacity: 0.8 }}>Try searching "iPhone", "MacBook", or "Sony"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
