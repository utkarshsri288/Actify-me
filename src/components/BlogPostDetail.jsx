import React from 'react'
import './BlogPostDetail.css'

const BlogPostDetail = ({ post }) => {
  if (!post) return null

  return (
    <>
      <section className="blog-post-hero" aria-label={`${post.title} - Hero`}>
        <div className="blog-post-hero-content container">
          <div className="blog-post-hero-text">
            <h1 className="blog-post-hero-title">{post.title}</h1>
            <p className="blog-post-hero-subtitle">
              {post.category} · {post.readTime}
            </p>
          </div>
        </div>
      </section>

      <section className="blog-post-detail">
        <div className="container">
          <article className="blog-post-content blog-post-content-card">
            <div className="blog-post-meta">
              <div className="blog-post-writer">
                <span className="blog-post-writer-label">Writer:</span>
                <span className="blog-post-writer-name">{post.writer}</span>
              </div>
              <span className="blog-post-date">{post.date}</span>
            </div>

            <div className="blog-post-body">
              {post.fullContent.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null
                if (/^\d+\./.test(paragraph.trim())) {
                  return (
                    <div key={index} className="blog-post-paragraph blog-post-list-item">
                      {paragraph.trim()}
                    </div>
                  )
                }
                return (
                  <p key={index} className="blog-post-paragraph">
                    {paragraph.trim()}
                  </p>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogPostDetail
