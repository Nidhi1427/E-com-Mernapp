import React from 'react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Products', value: '150+', icon: '📱', color: '#3b82f6' },
    { name: 'Total Orders', value: '2,847', icon: '📦', color: '#10b981' },
    { name: 'Revenue', value: '₹4.2M', icon: '💰', color: '#f59e0b' },
    { name: 'Conversion', value: '3.8%', icon: '📈', color: '#8b5cf6' }
  ];

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        📊 Admin Dashboard
      </h1>
      
      {/* STATS GRID */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem', marginBottom: '4rem' 
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.1)', padding: '2.5rem 2rem',
            borderRadius: '1.5rem', textAlign: 'center', backdropFilter: 'blur(10px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
          }}>
            <div style={{ 
              fontSize: '4rem', marginBottom: '1.5rem', 
              background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
              width: '100px', height: '100px', margin: '0 auto 1.5rem', 
              borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {stat.icon}
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: stat.color, marginBottom: '0.5rem' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>{stat.name}</div>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', padding: '3rem', 
        borderRadius: '1.5rem', backdropFilter: 'blur(10px)' 
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          ⚡ Quick Actions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          <button style={{
            padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white', border: 'none', borderRadius: '1rem', fontSize: '1.2rem',
            fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
            ➕ Add Product
          </button>
          <button style={{
            padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white', border: 'none', borderRadius: '1rem', fontSize: '1.2rem',
            fontWeight: 'bold', cursor: 'pointer'
          }}>
            📊 View Orders
          </button>
          <button style={{
            padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: 'white', border: 'none', borderRadius: '1rem', fontSize: '1.2rem',
            fontWeight: 'bold', cursor: 'pointer'
          }}>
            💾 Manage Inventory
          </button>
          <button style={{
            padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white', border: 'none', borderRadius: '1rem', fontSize: '1.2rem',
            fontWeight: 'bold', cursor: 'pointer'
          }}>
            🗑️ Clear Cache
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
