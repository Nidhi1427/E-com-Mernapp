import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import Context from '../context';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const context = useContext(Context);

  // ✅ Fetch cart data on mount
  useEffect(() => {
    if (context?.fetchUserAddToCart) {
      context.fetchUserAddToCart();
    }
  }, [context?.fetchUserAddToCart]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className='bg-gradient-to-r from-black to-slate-800 text-white shadow-2xl'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to="/" className='flex-shrink-0'>
          <Logo w={120} h={60} />
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className='flex-1 max-w-2xl mx-8'>
          <div className='flex bg-white/10 backdrop-blur-lg rounded-full border border-white/20 overflow-hidden'>
            <input 
              type='text' 
              placeholder='🔍 Search iPhone, MacBook, Samsung...' 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-300 outline-none'
            />
            <button 
              type="submit" 
              className='p-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all flex items-center justify-center'
            >
              <IoMdSearch className='text-xl' />
            </button>
          </div>
        </form>

        {/* User & Cart */}
        <div className='flex items-center gap-4'>
          {/* User */}
          <Link to="/login" className='group'>
            <div className='w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-500/30 transition-all group-hover:scale-110 cursor-pointer'>
              <FaCircleUser className='text-2xl' />
            </div>
          </Link>

          {/* Cart - ✅ FIXED: Uses context.cartCount */}
          <Link to="/cart" className='relative group'>
            <div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-2xl hover:shadow-red-500/25'>
              <IoCartSharp className='text-2xl' />
            </div>
            {context?.cartCount > 0 && (
              <div className='absolute -top-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center shadow-lg'>
                {context.cartCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
