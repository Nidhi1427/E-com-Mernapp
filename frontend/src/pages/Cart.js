import React from 'react';
import { useCart } from '../context';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ PAYMENT FUNCTION - WORKS WITH YOUR BACKEND
  const handlePayment = async () => {
  try {
    console.log('🛒 Starting payment...');
    
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart, total: total.toString() })
    });
    
    // ✅ CHECK RESPONSE STATUS FIRST
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('✅ Backend response:', data);
    
    // ✅ CHECK DATA STRUCTURE
    if (data.success !== true) {
      throw new Error('Backend returned non-success response');
    }
    
    alert(`🎉 Payment successful! Total: ₹${total.toLocaleString()}`);
    clearCart();
    navigate('/');
    
  } catch (error) {
    console.error('❌ FULL ERROR:', error);
    alert(`Payment failed: ${error.message}`);
  }
};


  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🛒</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Your Cart is Empty</h1>
        <Link to="/" style={{
          padding: '1rem 3rem', background: '#10b981', color: 'white',
          textDecoration: 'none', borderRadius: '2rem', fontSize: '1.2rem'
        }}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>🛒 Shopping Cart</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link to="/" style={{ color: '#3b82f6' }}>← Continue Shopping</Link>
        <button onClick={clearCart} style={{
          padding: '0.8rem 1.5rem', background: '#ef4444', color: 'white',
          border: 'none', borderRadius: '1rem', cursor: 'pointer'
        }}>
          Clear Cart
        </button>
      </div>

      {/* CART ITEMS */}
      <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{
            display: 'flex', gap: '2rem', background: 'rgba(255,255,255,0.1)',
            padding: '2rem', borderRadius: '1.5rem', backdropFilter: 'blur(10px)'
          }}>
            <img 
              src={item.image} 
              alt={item.name}
              style={{
                width: '120px', height: '120px', objectFit: 'cover',
                borderRadius: '1rem'
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.name}</h3>
              <div style={{ fontSize: '1.8rem', color: '#10b981', marginBottom: '1rem' }}>
                ₹{item.price.toLocaleString()}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span style={{ fontSize: '1.5rem', minWidth: '2rem', textAlign: 'center' }}>
                {item.quantity}
              </span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', textAlign: 'right' }}>
              ₹{(item.price * item.quantity).toLocaleString()}
            </div>

            <button onClick={() => removeFromCart(item.id)} style={{
              padding: '1rem', background: '#ef4444', color: 'white',
              border: 'none', borderRadius: '1rem', cursor: 'pointer', fontSize: '1.2rem'
            }}>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ✅ PAYMENT BUTTON - REPLACES CHECKOUT NAVIGATION */}
      <div style={{
        background: 'rgba(255,255,255,0.1)', padding: '2rem',
        borderRadius: '1.5rem', textAlign: 'right'
      }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          TOTAL: ₹{total.toLocaleString()}
        </div>
        <button onClick={handlePayment} style={{
          width: '100%', padding: '1.5rem', background: '#10b981',
          color: 'white', border: 'none', borderRadius: '1rem',
          fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer'
        }}>
          💳 Proceed to Pay ₹{total.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default Cart;
