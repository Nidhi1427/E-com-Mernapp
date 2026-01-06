import { Header } from './components/Header';
import { Outlet, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Routes>
          <Route path="/" element={<div style={{padding: '40px'}}>Home - Ecommerce Products</div>} />
          <Route path="/login" element={<div style={{padding: '40px'}}>Login Page</div>} />
          <Route path="/signup" element={<div style={{padding: '40px'}}>Sign Up Page</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
