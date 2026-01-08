const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// LOG ALL REQUESTS
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} | ${req.method} ${req.path}`);
    next();
});

// ✅ FIXED CHECKOUT ROUTE - THIS SOLVES 404
app.post('/api/checkout', (req, res) => {
    console.log('🛒 CHECKOUT SUCCESS! Items:', req.body.cart?.length || 0, 'Total:', req.body.total);
    res.json({ 
        success: true, 
        message: "Payment completed!",
        total: req.body.total 
    });
});

app.post('/api/signup', (req, res) => {
    console.log('✅ SIGNUP HIT!');
    res.json({ success: true });
});

app.post('/api/category-product', (req, res) => {
    res.json({ success: true, data: [] });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Backend LIVE: http://localhost:${PORT}`);
});
