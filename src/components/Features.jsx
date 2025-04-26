import React from 'react';
import './Features.css';

const features = [
 {
  icon: '🚚',
  title: 'Free Shipping',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.'
 },
 {
  icon: '💬',
  title: 'Support 24/7',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.'
 },
 {
  icon: '💸',
  title: 'Money Return',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.'
 }
];

const Features = () => (
 <section className="features">
  {features.map((f, i) => (
   <div className="feature" key={i}>
    <span className="feature__icon">{f.icon}</span>
    <h4>{f.title}</h4>
    <p>{f.desc}</p>
   </div>
  ))}
 </section>
);

export default Features; 