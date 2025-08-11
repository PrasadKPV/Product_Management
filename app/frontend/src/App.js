import React, { useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  const navRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const preventZoom = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.deltaY || e.deltaX)) {
        e.preventDefault();
      }
    };

    const preventKeyZoom = (e) => {
      if ((e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventZoom, { passive: false });
    window.addEventListener('keydown', preventKeyZoom);

    return () => {
      window.removeEventListener('wheel', preventZoom);
      window.removeEventListener('keydown', preventKeyZoom);
    };
  }, []);


  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector('.nav-link.active');
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        navRef.current.style.setProperty('--pill-left', `${offsetLeft}px`);
        navRef.current.style.setProperty('--pill-width', `${offsetWidth}px`);
        navRef.current.style.setProperty('--pill-opacity', '1');
      } else {
        navRef.current.style.setProperty('--pill-opacity', '0');
      }
    }
  }, [location]);

  return (
    <div className="container">
      <header className="app-header">
        <h1>Product Management</h1>
        <nav className="main-nav" ref={navRef}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Product List
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Add Product
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
