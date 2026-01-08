import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from './context';
import { FaSearch, FaUser, FaChartBar, FaShoppingCart } from 'react-icons/fa'; // ✅ NEW

const App = () => {
  const { cart, notifications } = useCart();
  
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white' }}>
      {/* HEADER */}
      <header style={{
        background: 'linear-gradient(135deg, #1e293b, #334155)',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <Link to="/" style={{ 
          fontSize: '2.5rem', fontWeight: 'bold', 
          textDecoration: 'none', color: 'white',
          display: 'flex', alignItems: 'center', gap: '1rem'
        }}>
          🛒 GADGET GALLERY
        </Link>
        
        <div style={{ 
          display: 'flex', gap: '2rem', alignItems: 'center'
        }}>
          {/* 🔍 → FaSearch */}
          <Link to="/search" title="Search" style={{ 
            color: '#3b82f6', textDecoration: 'none',
            padding: '0.8rem', borderRadius: '50%',
            transition: 'all 0.3s ease', display: 'flex', alignItems: 'center',
            fontSize: '1.8rem' // Size control
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(59,130,246,0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}>
            <FaSearch />
          </Link>
          
          {/* 👤 → FaUser */}
          <Link to="/login" title="Login" style={{ 
            color: '#10b981', textDecoration: 'none',
            padding: '0.8rem', borderRadius: '50%',
            transition: 'all 0.3s ease', display: 'flex', alignItems: 'center',
            fontSize: '1.8rem'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(16,185,129,0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}>
            <FaUser />
          </Link>

          {/* 📊 → FaChartBar */}
          <Link to="/dashboard" title="Dashboard" style={{ 
            color: '#f59e0b', textDecoration: 'none',
            padding: '0.8rem', borderRadius: '50%',
            transition: 'all 0.3s ease', display: 'flex', alignItems: 'center',
            fontSize: '1.8rem'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(245,158,11,0.2)'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}>
            <FaChartBar />
          </Link>

          {/* 🛒 → FaShoppingCart */}
          <Link to="/cart" title="Cart" style={{ 
            background: '#10b981', padding: '1rem 1.5rem', 
            borderRadius: '2rem', textDecoration: 'none', color: 'white',
            fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', 
            alignItems: 'center', gap: '0.8rem',
            boxShadow: '0 4px 15px rgba(16,185,129,0.4)'
          }}>
            <FaShoppingCart style={{ fontSize: '1.5rem' }} />
            {cart.length}
          </Link>
        </div>
      </header>

      {/* NOTIFICATIONS */}
      {notifications.map(notif => (
        <div key={notif.id} style={{
          position: 'fixed', top: '100px', right: '2rem',
          background: '#10b981', color: 'white', padding: '1rem 2rem',
          borderRadius: '1rem', boxShadow: '0 10px 30px rgba(16,185,129,0.4)',
          zIndex: 1000
        }}>
          {notif.message}
        </div>
      ))}

      {/* MAIN */}
      <main style={{ 
  padding: '3rem 4rem',  // ✅ Increased side padding
  minHeight: 'calc(100vh - 160px)',
  maxWidth: '1600px',    // ✅ Center constraint
  margin: '0 auto'       // ✅ Auto center
}}>
  <Outlet />
</main>


    </div>
  );
};

export default App;
