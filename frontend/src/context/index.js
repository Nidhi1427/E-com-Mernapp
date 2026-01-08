import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Add notification
    const notifId = Date.now();
    setNotifications(prev => [...prev, {
      id: notifId,
      message: `${product.name} added to cart!`,
      type: 'success'
    }]);

    // Auto remove notification
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notifId));
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
    setNotifications([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    notifications,
    setNotifications
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCart = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCart must be used within ContextProvider');
  }
  return context;
};
