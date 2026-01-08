import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from './context';

const App = () => {
  const { cart } = useCart();
  
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white' }}>
      {/* HEADER - RIGHT ALIGN + BIGGER ICONS */}
      <header style={{
        background: 'linear-gradient(135deg, #1e293b, #334155)',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        {/* LEFT - Logo */}
        <Link to="/" style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textDecoration: 'none', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          🛒 GADGET GALLERY
        </Link>
        
        {/* RIGHT - BIGGER ICONS */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          fontSize: '1.8rem' // BIGGER ICONS
        }}>
          <Link to="/search" title="Search" style={{ 
            color: '#3b82f6', 
            textDecoration: 'none',
            padding: '0.8rem',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(59,130,246,0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            🔍
          </Link>
          
          <Link to="/login" title="Login" style={{ 
            color: '#10b981', 
            textDecoration: 'none',
            padding: '0.8rem',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(16,185,129,0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            👤
          </Link>
          
          <Link to="/cart" title="Cart" style={{ 
            background: '#10b981', 
            padding: '1rem 1.5rem', 
            borderRadius: '2rem', 
            textDecoration: 'none', 
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            boxShadow: '0 4px 15px rgba(16,185,129,0.4)'
          }}>
            🛒 {cart.length}
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ padding: '3rem 2rem', minHeight: 'calc(100vh - 160px)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
