import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const PEXELS_API_KEY = 'XscP6Kdamm0Us34Ux0L4v74RxMw6HTJds6n3gxZM2qAfAy5L6x9TiFUs';

    
    const productsData = [
      { id: 1, name: 'iPhone 16 Pro', price: 99999, category: 'phone', 
        pexelsQuery: 'iphone 16 pro realistic product photography' },
      { id: 2, name: 'MacBook Pro M3', price: 199999, category: 'laptop', 
        pexelsQuery: 'macbook pro m3 silver laptop product photography' },
      { id: 3, name: 'iPad Pro', price: 89999, category: 'tablet', 
        pexelsQuery: 'ipad pro tablet product photography studio' },
      { id: 4, name: 'AirPods Pro 3', price: 24999, category: 'headphones', 
        pexelsQuery: 'airpods pro white earbuds product photography' },
      { id: 5, name: 'Apple Watch Ultra', price: 79999, category: 'smartwatch', 
        pexelsQuery: 'apple watch ultra black smartwatch product shot' },
      { id: 6, name: 'iPhone 16', price: 79999, category: 'phone', 
        pexelsQuery: 'iphone 16 product photography white background' },
      { id: 7, name: 'MacBook Air', price: 129999, category: 'laptop', 
        pexelsQuery: 'macbook air m2 laptop space gray studio shot' },
      { id: 8, name: 'AirPods Max', price: 49999, category: 'headphones', 
        pexelsQuery: 'airpods max headphones silver product photography' },
      { id: 9, name: 'iPad Air', price: 59999, category: 'tablet', 
        pexelsQuery: 'ipad air 5th gen tablet purple product shot' },
      { id: 10, name: 'Apple Watch SE', price: 29999, category: 'smartwatch', 
        pexelsQuery: 'apple watch se smartwatch product photography' },
      { id: 11, name: 'iPhone 15 Pro', price: 89999, category: 'phone', 
        pexelsQuery: 'iphone 15 pro titanium product photography' },
      { id: 12, name: 'Mac Mini M2', price: 59999, category: 'laptop', 
        pexelsQuery: 'mac mini m2 desktop computer studio photography' }
    ];

    // Fetch images from Pexels
    const fetchImages = async () => {
      const imagePromises = productsData.map(async (product) => {
        try {
          const response = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(product.pexelsQuery)}&per_page=1`,
            {
              headers: { Authorization: PEXELS_API_KEY }
            }
          );
          const data = await response.json();
          return {
            ...product,
            image: data.photos[0]?.src?.medium || 'https://images.pexels.com/photos/9099070/pexels-photo-9099070.jpeg'
          };
        } catch (error) {
          console.log('Pexels API error, using fallback');
          return { ...product, image: 'https://images.pexels.com/photos/9099070/pexels-photo-9099070.jpeg' };
        }
      });

      const productsWithImages = await Promise.all(imagePromises);
      setProducts(productsWithImages);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const categories = ['all', 'phone', 'laptop', 'tablet', 'headphones', 'smartwatch'];

  const filteredProducts = products.filter(p => 
    category === 'all' ? true : p.category === category
  );

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>⚡</div>
        <h1 style={{ fontSize: '3rem' }}>Loading REAL Product Images...</h1>
        <p>Fetching from Pexels API</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* CATEGORIES */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '1rem', 
        marginBottom: '3rem', justifyContent: 'center'
      }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{
              padding: '0.8rem 1.8rem', borderRadius: '2rem',
              background: category === cat ? '#10b981' : 'rgba(255,255,255,0.1)',
              color: 'white', border: 'none', cursor: 'pointer',
              backdropFilter: 'blur(10px)', fontWeight: '500',
              transition: 'all 0.3s ease'
            }}>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID - REAL IMAGES */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{
            background: 'rgba(255,255,255,0.1)', padding: '2rem',
            borderRadius: '1.5rem', backdropFilter: 'blur(10px)',
            textAlign: 'center', transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            
            {/* REAL PEXELS IMAGE */}
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '100%', height: '250px', objectFit: 'cover',
                borderRadius: '1rem', marginBottom: '1.5rem'
              }}
              loading="lazy"
            />
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              {product.name}
            </h3>
            
            <div style={{ 
              fontSize: '2rem', fontWeight: 'bold', color: '#10b981', 
              marginBottom: '1.5rem' 
            }}>
              ₹{product.price.toLocaleString()}
            </div>
            
            <Link to={`/product/${product.id}`} style={{
              display: 'inline-block', padding: '0.8rem 1.5rem',
              background: 'rgba(255,255,255,0.2)', color: 'white',
              textDecoration: 'none', borderRadius: '1rem',
              marginRight: '1rem', fontWeight: '500'
            }}>
              View Details
            </Link>
            
            <button onClick={() => addToCart(product)} style={{
              padding: '0.8rem 1.5rem', background: '#10b981',
              color: 'white', border: 'none', borderRadius: '1rem',
              fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
