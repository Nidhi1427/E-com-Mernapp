import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context';

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ 12 PRODUCTS - NO API ERRORS
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'iPhone 16 Pro Max', price: 119900, img: 'https://images.unsplash.com/photo-1592899679516-9e2c0fb205a4?w=400&fit=crop', category: 'smartphones' },
        { id: 2, name: 'MacBook Pro M3', price: 179900, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop', category: 'laptops' },
        { id: 3, name: 'Sony WH-1000XM5', price: 32999, img: 'https://images.unsplash.com/photo-1613040805626-e8b95a9ebaa4?w=400&fit=crop', category: 'headphones' },
        { id: 4, name: 'Apple Watch Ultra 2', price: 89900, img: 'https://images.unsplash.com/photo-1721322778012-81d687a625de?w=400&fit=crop', category: 'smartwatches' },
        { id: 5, name: 'Samsung Galaxy S25 Ultra', price: 129999, img: 'https://images.unsplash.com/photo-1701554518974-6f33fd5956e3?w=400&fit=crop', category: 'smartphones' },
        { id: 6, name: 'Dell XPS 13', price: 109900, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop', category: 'laptops' },
        { id: 7, name: 'AirPods Pro 2', price: 24900, img: 'https://images.unsplash.com/photo-1588423771079-1d35d6d93a88?w=400&fit=crop', category: 'earbuds' },
        { id: 8, name: 'Google Pixel Watch 3', price: 39900, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&fit=crop', category: 'smartwatches' },
        { id: 9, name: 'iPad Pro M4', price: 99900, img: 'https://images.unsplash.com/photo-1561169939-c44e837e2204?w=400&fit=crop', category: 'tablets' },
        { id: 10, name: 'Bose QuietComfort Ultra', price: 28900, img: 'https://images.unsplash.com/photo-1613040805626-e8b95a9ebaa4?w=400&fit=crop', category: 'headphones' },
        { id: 11, name: 'Surface Laptop 7', price: 119900, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop', category: 'laptops' },
        { id: 12, name: 'Samsung Galaxy Buds 3', price: 17900, img: 'https://images.unsplash.com/photo-1588423771079-1d35d6d93a88?w=400&fit=crop', category: 'earbuds' }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', fontSize: '2rem' }}>
        Loading products...
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section style={{
        height: '70vh',
        background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)',
        borderRadius: '3rem',
        marginBottom: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', marginBottom: '1rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          Welcome to Gadget Gallery
        </h1>
        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginBottom: '3rem', maxWidth: '600px' }}>
          Premium Electronics • Latest Tech • Best Prices
        </p>
        <Link to="/search" style={{
          padding: '1.5rem 4rem',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '3rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          border: '2px solid rgba(255,255,255,0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
          e.target.style.transform = 'translateY(-5px)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          🛒 SHOP NOW
        </Link>
      </section>

      {/* PRODUCTS GRID */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '4rem', color: 'white' }}>
          Featured Products
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '2rem',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(16,185,129,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
            }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: '280px', 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(16,185,129,0.9)',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '1rem',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {product.category}
                </div>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'white' }}>
                  {product.name}
                </h3>
                <div style={{ 
                  fontSize: '2.5rem', 
                  color: '#10b981', 
                  fontWeight: '900', 
                  marginBottom: '2rem' 
                }}>
                  ₹{product.price.toLocaleString()}
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'linear-gradient(45deg, #10b981, #059669)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '1.5rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(16,185,129,0.4)'
                  }}
                >
                  ADD TO CART →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
