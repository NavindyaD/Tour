import React from "react";
import "./BlogPage.css";
import { useTranslation } from "./hooks/useTranslation";
import explore from "./explore.jpg";
import beaches from "./beaches.jpg";
import wild from "./wild.jpg";

const BlogPage = () => {
  const { t } = useTranslation();
  
  const blogs = [
    {
      title: t.exploringBeautyTitle,
      image: explore,
      excerpt: t.exploringBeautyExcerpt,
    },
    {
      title: t.bestBeachesTitle,
      image: beaches,
      excerpt: t.bestBeachesExcerpt,
    },
    {
      title: t.wildlifeSafariTitle,
      image: wild,
      excerpt: t.wildlifeSafariExcerpt,
    },
  ];
  
  return (
    <div className="blog-container">
      <h1 className="blog-title">{t.travelBlogTitle}</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title-small">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="blog-button">{t.readMore}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
