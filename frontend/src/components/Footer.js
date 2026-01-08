import React from 'react'

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#f1f5f9', 
      padding: '40px 20px', 
      marginTop: '60px' 
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: '#475569' 
        }}>
          © 2026 Gadget Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
