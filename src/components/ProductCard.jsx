import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
 <div className="product-card">
  <div className="product-card__img-wrap">
   <img src={product.image} alt={product.name} />
   {product.discount > 0 && (
    <span className="product-card__badge product-card__badge--discount">-{product.discount}%</span>
   )}
   {product.isNew && (
    <span className="product-card__badge product-card__badge--new">New</span>
   )}
   <span className="product-card__wishlist" title="Add to wishlist">🤍</span>
  </div>
  <div className="product-card__info">
   <div className="product-card__name">{product.name}</div>
   <div className="product-card__prices">
    <span className="product-card__price">€{product.price}</span>
    {product.oldPrice && (
     <span className="product-card__old-price">€{product.oldPrice}</span>
    )}
   </div>
  </div>
 </div>
);

export default ProductCard; 