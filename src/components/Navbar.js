import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  let location = useLocation();
  return (
    <nav>
      <div class="nav-title">
        {/* <h1>Computer Parts</h1> */}
        <Link to="/" className="nav-title-link">
          Computer Parts
        </Link>
      </div>
      <div class="nav-links">
        <Link
          to="/"
          className={(location.pathname === '/' ? 'active-link' : '') + ' link'}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={
            (location.pathname === '/shop' ? 'active-link' : '') + ' link'
          }
        >
          Shop
        </Link>
        <Link
          to="/cart"
          className={
            (location.pathname === '/cart' ? 'active-link' : '') + ' link'
          }
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
