import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      background: '#0f172a', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white'
    }}>
      <div style={{ 
        background: 'rgba(30, 41, 59, 0.8)', 
        backdropFilter: 'blur(20px)',
        padding: '4rem', 
        borderRadius: '2rem', 
        minWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          👤 Login
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input type="email" placeholder="Email" style={{
            padding: '1.2rem 1.5rem',
            border: 'none',
            borderRadius: '1rem',
            fontSize: '1.1rem',
            background: 'rgba(255,255,255,0.1)'
          }} />
          <input type="password" placeholder="Password" style={{
            padding: '1.2rem 1.5rem',
            border: 'none',
            borderRadius: '1rem',
            fontSize: '1.1rem',
            background: 'rgba(255,255,255,0.1)'
          }} />
          <button style={{
            padding: '1.2rem',
            background: 'linear-gradient(45deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            borderRadius: '1rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Login
          </button>
          <div style={{ textAlign: 'center' }}>
            <Link to="/signup" style={{ color: '#3b82f6' }}>Don't have an account? Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
