import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const navRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector('a.active');
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        navRef.current.style.setProperty('--pill-left', `${offsetLeft}px`);
        navRef.current.style.setProperty('--pill-width', `${offsetWidth}px`);
        navRef.current.style.setProperty('--pill-opacity', '1');
      } else {
        navRef.current.style.setProperty('--pill-opacity', '0');
      }
    }
  }, [router.pathname]);

  return (
    <div className="container">
      <header className="app-header">
        <h1>Product Management</h1>
        <nav className="main-nav" ref={navRef}>
          <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
            Product List
          </Link>
          <Link
            href="/products/add"
            className={`nav-link ${router.pathname === '/products/add' ? 'active' : ''}`}
          >
            Add Product
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}