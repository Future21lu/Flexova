import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => (
 <section className="product-grid">
  <h2 className="product-grid__title">New Arrival</h2>
  <p className="product-grid__subtitle">Lorem ipsum dolor sit amet conse ctetu.</p>
  <div className="product-grid__list">
   {products.map(product => (
    <ProductCard key={product.id} product={product} />
   ))}
  </div>
 </section>
);

export default ProductGrid; 