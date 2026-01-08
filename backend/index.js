const express = require('express');
const cors = require('cors');
const app = express(); // ✅ THIS WAS MISSING

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// LOG ALL REQUESTS
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} | ${req.method} ${req.path}`);
    next();
});

// ✅ MOCK CATEGORY PRODUCTS - FIXES ALL ERRORS
app.post('/api/category-product', (req, res) => {
    console.log('✅ CATEGORY HIT!', req.body);
    res.json({
        success: true,
        data: [
            { 
                _id: "1", 
                productName: "iPhone 16 Pro", 
                category: "smartphones", 
                sellingPrice: 119999,
                productId: { 
                    productName: "iPhone 16 Pro",
                    category: "smartphones",
                    sellingPrice: 119999,
                    productImage: ["https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=iPhone"]
                }
            },
            { 
                _id: "2", 
                productName: "MacBook Pro", 
                category: "processor", 
                sellingPrice: 199999,
                productId: { 
                    productName: "MacBook Pro",
                    category: "processor", 
                    sellingPrice: 199999,
                    productImage: ["https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=MacBook"]
                }
            },
            { 
                _id: "3", 
                productName: "Apple Watch", 
                category: "watches", 
                sellingPrice: 79999,
                productId: { 
                    productName: "Apple Watch",
                    category: "watches",
                    sellingPrice: 79999,
                    productImage: ["https://via.placeholder.com/300x300/45B7D1/FFFFFF?text=Watch"]
                }
            }
        ]
    });
});

// MOCK CART (empty for now)
app.get('/api/view-cart-product', (req, res) => {
    console.log('✅ CART VIEW HIT!');
    res.json({
        success: true,
        data: []
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Backend LIVE: http://localhost:${PORT}`);
    console.log(`✅ Test GET: http://localhost:${PORT}/api/category-product`);
});
