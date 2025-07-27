import React from "react";
import "./BlogPage.css";

const blogs = [
  {
    title: "Exploring the Beauty of Sri Lanka",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/sri-lanka.jpg",
    excerpt: "Discover the breathtaking landscapes, rich history, and cultural wonders of Sri Lanka in this comprehensive travel guide.",
  },
  {
    title: "Best Beaches in Sri Lanka",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/beach-sri-lanka.jpg",
    excerpt: "From golden sandy shores to stunning turquoise waters, explore the best beach destinations in Sri Lanka for a perfect getaway.",
  },
  {
    title: "Wildlife Safari Adventures",
    image: "https://www.olankatravels.com/wp-content/uploads/2023/05/wildlife-sri-lanka.jpg",
    excerpt: "Experience the thrill of spotting elephants, leopards, and exotic birds in Sri Lanka's renowned national parks.",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title-small">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="blog-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
