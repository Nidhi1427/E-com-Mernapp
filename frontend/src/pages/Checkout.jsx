import React from 'react';
import { useCart } from '../context';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const handleCheckout = () => {
    // Simulate payment
    setTimeout(() => {
      clearCart();
      alert('✅ Payment Successful! Thank you for shopping!');
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h1>🛒 Your cart is empty</h1>
        <button onClick={() => navigate('/')} 
          style={{ padding: '1rem 3rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '2rem', fontSize: '1.2rem' }}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>💳 Checkout</h1>
      
      {/* Cart Summary */}
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>{item.name}</span>
            <span>₹{item.price} x {item.quantity}</span>
          </div>
        ))}
        <hr />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'right' }}>
          TOTAL: ₹{total.toLocaleString()}
        </div>
      </div>

      {/* Payment Form */}
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem' }}>
        <button onClick={handleCheckout}
          style={{
            width: '100%', padding: '1.5rem', background: '#3b82f6',
            color: 'white', border: 'none', borderRadius: '1rem',
            fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold'
          }}>
          💳 Pay ₹{total.toLocaleString()} Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
