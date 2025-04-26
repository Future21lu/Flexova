import React from 'react';
import './Footer.css';

const Footer = () => (
 <footer className="footer">
  <div className="footer__container">
   <div className="footer__column">
    <h3 className="footer__logo">Flexova.</h3>
    <p className="footer__about">© 2024 Flexova.<br />All Rights Reserved</p>
    <div className="footer__contact-info">
     <p>Store location</p>
     <p>Contact</p>
     <p>Orders tracking</p>
    </div>
   </div>

   <div className="footer__column">
    <h4 className="footer__title">USEFUL LINKS</h4>
    <ul className="footer__links">
     <li><a href="#">Returns</a></li>
     <li><a href="#">Support Policy</a></li>
     <li><a href="#">Size guide</a></li>
     <li><a href="#">FAQs</a></li>
    </ul>
   </div>

   <div className="footer__column">
    <h4 className="footer__title">FOLLOW US</h4>
    <ul className="footer__links">
     <li><a href="#">Facebook</a></li>
     <li><a href="#">Twitter</a></li>
     <li><a href="#">Instagram</a></li>
     <li><a href="#">Youtube</a></li>
    </ul>
   </div>

   <div className="footer__column">
    <h4 className="footer__title">SUBSCRIBE</h4>
    <p className="footer__subscribe-text">Get E-mail updates about our latest shop and special offers.</p>
    <div className="footer__subscribe">
     <input type="email" placeholder="Enter your email address..." />
     <button>SUBSCRIBE</button>
    </div>
   </div>
  </div>
 </footer>
);

export default Footer; 