'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={isScrolled ? 'nav-scrolled' : ''}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        padding: '2.5rem 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ 
          fontSize: '1.8rem', 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 700, 
          letterSpacing: '4px', 
          color: 'var(--accent)',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          CHRONOS
        </Link>
        <div style={{ display: 'flex', gap: '3rem' }}>
          {['Colección', 'Restauración', 'Legado', 'Contacto'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`} 
              style={{ 
                textTransform: 'uppercase', 
                fontSize: '0.85rem', 
                letterSpacing: '2px',
                fontWeight: 600,
                position: 'relative'
              }}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
