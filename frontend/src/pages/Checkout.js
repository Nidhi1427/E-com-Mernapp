import React from 'react';
import { useCart } from '../context';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, total })
      });
      
      const data = await response.json();
      console.log('Payment response:', data);
      
      if (data.url) {
        window.location.href = data.url;  // Stripe redirect
      } else {
        alert('Payment successful! 🎉');
        clearCart();
        navigate('/');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Try again.');
    }
  };

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>💳 Checkout</h1>
      
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem' }}>
        <h3>Order Summary</h3>
        <div>Total: ₹{total.toLocaleString()}</div>
        <div>{cart.length} items</div>
      </div>
      
      <button 
        onClick={handlePayment}
        style={{
          width: '100%', padding: '1.5rem', background: '#10b981',
          color: 'white', border: 'none', borderRadius: '1rem',
          fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer'
        }}
      >
        💳 Proceed to Pay ₹{total.toLocaleString()}
      </button>
    </div>
  );
};

export default Checkout;
