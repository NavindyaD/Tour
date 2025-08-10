import React from "react";
import "./BlogPage.css";
import explore from "./explore.jpg";
import beaches from "./beaches.jpg";
import wild from "./wild.jpg";

const blogs = [
  {
    title: "Exploring the Beauty of Sri Lanka",
    image: explore,
    excerpt: "Discover the breathtaking landscapes, rich history, and cultural wonders of Sri Lanka in this comprehensive travel guide.",
  },
  {
    title: "Best Beaches in Sri Lanka",
    image: beaches,
    excerpt: "From golden sandy shores to stunning turquoise waters, explore the best beach destinations in Sri Lanka for a perfect getaway.",
  },
  {
    title: "Wildlife Safari Adventures",
    image: wild,
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
