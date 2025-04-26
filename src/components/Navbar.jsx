import React from 'react';
import './Navbar.css';

const Navbar = () => (
 <nav className="navbar">
  <div className="navbar__logo">Flexova.</div>
  <ul className="navbar__links">
   <li><a href="#">Home</a></li>
   <li><a href="#">Shop</a></li>
   <li><a href="#">Collection</a></li>
   <li><a href="#">Blog</a></li>
   <li><a href="#">Contact</a></li>
  </ul>
  <div className="navbar__icons">
   <span role="img" aria-label="wishlist">🤍</span>
   <span role="img" aria-label="cart">🛒</span>
  </div>
 </nav>
);

export default Navbar; 