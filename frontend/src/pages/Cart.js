import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context'; // ✅ FIXED IMPORT

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // ✅ useCart instead of Context
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Your cart is empty</h2>
        <Link to="/" style={{
          padding: '1rem 2rem',
          background: '#10b981',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '1rem'
        }}>
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>🛒 Shopping Cart</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{
            display: 'flex', gap: '2rem', background: '#1e293b',
            padding: '2rem', borderRadius: '1rem'
          }}>
            <img src={item.img} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '0.5rem' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem' }}>{item.name}</h3>
              <div style={{ fontSize: '1.8rem', color: '#10b981', fontWeight: 'bold' }}>
                ₹{item.price.toLocaleString()}
              </div>
            </div>
            <button onClick={() => removeFromCart(item)} style={{
              padding: '1rem 2rem', background: '#ef4444', color: 'white',
              border: 'none', borderRadius: '0.5rem', cursor: 'pointer'
            }}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#1e293b', borderRadius: '1rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Total: ₹{total.toLocaleString()}</h2>
        <button style={{
          padding: '1.5rem 3rem', background: '#10b981', color: 'white',
          border: 'none', borderRadius: '1rem', fontSize: '1.5rem', cursor: 'pointer'
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
