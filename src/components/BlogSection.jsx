import React from 'react';
import './BlogSection.css';

const blogs = [
 {
  id: 1,
  title: 'A guide to latest trends',
  image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  author: 'Admin',
  category: 'Lifestyle'
 },
 {
  id: 2,
  title: 'Five ways to lead a happy life',
  image: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?auto=format&fit=crop&w=600&q=80',
  author: 'Admin',
  category: 'Lifestyle'
 },
 {
  id: 3,
  title: 'Tips on having a happy life',
  image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  author: 'Admin',
  category: 'Lifestyle'
 }
];

const BlogSection = () => (
 <section className="blog-section">
  <h2 className="blog-section__title">OUR BLOG</h2>
  <div className="blog-section__list">
   {blogs.map(blog => (
    <div className="blog-card" key={blog.id}>
     <div className="blog-card__img">
      <img src={blog.image} alt={blog.title} />
      <span className="blog-card__category">{blog.category}</span>
     </div>
     <div className="blog-card__content">
      <h3 className="blog-card__title">{blog.title}</h3>
      <p className="blog-card__author">By {blog.author}</p>
     </div>
    </div>
   ))}
  </div>
 </section>
);

export default BlogSection; 