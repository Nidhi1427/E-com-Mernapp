import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header style={{ 
      height: '64px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
      backgroundColor: 'white' 
    }}>
      <div style={{ 
        height: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 16px', 
        justifyContent: 'space-between' 
      }}>
        {/* Logo */}
        <div>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Logo w={100} h={50}/>
          </Link>
        </div>
        
        {/* Search Bar */}
        <div style={{ 
          display: 'none', 
          flex: '1', 
          maxWidth: '400px', 
          margin: '0 20px',
          alignItems: 'center', 
          border: '1px solid #d1d5db', 
          borderRadius: '9999px', 
          paddingLeft: '8px',
          boxShadow: '0 0 0 0',
          transition: 'box-shadow 0.2s'
        }} className="lg:flex">
          <input 
            type='text' 
            placeholder='search product here..' 
            style={{ 
              flex: 1, 
              border: 'none', 
              outline: 'none', 
              padding: '8px 0' 
            }}
          />
          <div style={{ 
            fontSize: '20px', 
            minWidth: '50px', 
            height: '32px', 
            backgroundColor: '#dc2626', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '0 9999px 9999px 0',
            color: 'white' 
          }}>
            <IoMdSearch />
          </div>
        </div>

        {/* Right Icons */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px' 
        }}>
          <div style={{ fontSize: '30px', cursor: 'pointer' }}>
            <FaCircleUser />
          </div>

          <div style={{ fontSize: '24px', position: 'relative' }}>
            <span><IoCartSharp /></span>
            <div style={{ 
              backgroundColor: 'black', 
              color: 'white', 
              height: '20px', 
              borderRadius: '50%', 
              width: '20px', 
              padding: '2px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              position: 'absolute', 
              top: '-8px', 
              right: '-8px',
              fontSize: '12px' 
            }}>
              0
            </div>
          </div>

          <div>
            <Link 
              to={"/login"} 
              style={{ 
                padding: '4px 12px', 
                borderRadius: '9999px', 
                color: 'white', 
                backgroundColor: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
