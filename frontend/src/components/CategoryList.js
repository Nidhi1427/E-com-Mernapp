import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [cartCount, setCartCount] = React.useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div style={{
            background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
            color: 'white',
            minHeight: '100vh',
            padding: '2rem 0'
        }}>
            {/* HERO */}
            <section style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #047857 100%)',
                padding: '0 2rem'
            }}>
                <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 8rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '2rem'
                    }}>
                        GADGET GALLERY
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.9 }}>
                        Premium Electronics • {cartCount} items in cart
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <Link to="/cart" style={{
                            padding: '1.5rem 3rem',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #10b981, #059669)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '2rem',
                            boxShadow: '0 20px 40px rgba(16,185,129,0.4)',
                            display: 'inline-block'
                        }}>
                            🛒 VIEW CART ({cartCount} items)
                        </Link>
                        <Link to="/search" style={{
                            padding: '1.5rem 3rem',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            background: 'transparent',
                            color: 'white',
                            border: '3px solid rgba(59,130,246,0.5)',
                            borderRadius: '2rem',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            🔍 SEARCH PRODUCTS
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section style={{ padding: '5rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', textAlign: 'center', marginBottom: '4rem' }}>
                    Featured Products
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { id: 1, name: 'iPhone 16 Pro Max', price: 119900, img: 'https://images.unsplash.com/photo-1592899679516-9e2c0fb205a4?w=400&fit=crop' },
                        { id: 2, name: 'MacBook Pro M3', price: 179900, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop' },
                        { id: 3, name: 'Sony WH-1000XM5', price: 32999, img: 'https://images.unsplash.com/photo-1613040805626-e8b95a9ebaa4?w=400&fit=crop' },
                        { id: 4, name: 'Apple Watch Ultra 2', price: 89900, img: 'https://images.unsplash.com/photo-1721322778012-81d687a625de?w=400&fit=crop' }
                    ].map((product) => (
                        <div key={product.id} style={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '2rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            overflow: 'hidden'
                        }}>
                            <img src={product.img} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{product.name}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
                                        ₹{product.price.toLocaleString()}
                                    </span>
                                </div>
                                <button onClick={handleAddToCart} style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    background: 'linear-gradient(45deg, #10b981, #059669)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '1.5rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}>
                                    ADD TO CART ({cartCount} total items)
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CategoryList;
