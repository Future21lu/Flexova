import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => (
 <section className="hero-banner">
  <div className="hero-banner__content">
   <h2>Stylish</h2>
   <h1>Male Clothes</h1>
   <p>30% off Summer Vacation</p>
   <button className="hero-banner__btn">Shop Now</button>
  </div>
  <div className="hero-banner__image">
   <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="Stylish Male" />
  </div>
 </section>
);

export default HeroBanner; 