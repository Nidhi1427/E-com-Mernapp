import React from 'react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Products', value: '150+', icon: '📱' },
    { name: 'Total Orders', value: '2,847', icon: '📦' },
    { name: 'Revenue', value: '₹4.2M', icon: '💰' },
    { name: 'Conversion', value: '3.8%', icon: '📈' }
  ];

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>📊 Admin Dashboard</h1>
      
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {stats.map(stat => (
          <div key={stat.name} style={{
            background: 'rgba(255,255,255,0.1)', padding: '2rem',
            borderRadius: '1rem', textAlign: 'center', backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{stat.icon}</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>{stat.value}</div>
            <div>{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>⚡ Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ padding: '1rem 2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '1rem' }}>➕ Add Product</button>
          <button style={{ padding: '1rem 2rem', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '1rem' }}>📊 View Orders</button>
          <button style={{ padding: '1rem 2rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '1rem' }}>🗑️ Delete Cache</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
