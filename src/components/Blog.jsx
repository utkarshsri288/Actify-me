import React from 'react'
import blogImage from '../runningactify.png'
import { blogPosts } from '../data/blogPostsData'
import './Blog.css'

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Stay updated with the latest insights, tips, and stories from the world of sports and wellness events
          </p>
        </div>

        <div className="blog-content">
          <div className="blog-image-wrapper">
            <img src={blogImage} alt="Actifyme Running" className="blog-image" />
          </div>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="blog-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                {post.writer && (
                  <div className="blog-writer">
                    <span className="blog-writer-label">Writer:</span>
                    <span className="blog-writer-name">{post.writer}</span>
                  </div>
                )}
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
