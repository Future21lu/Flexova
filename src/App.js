import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <Features />
      <ProductGrid />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
