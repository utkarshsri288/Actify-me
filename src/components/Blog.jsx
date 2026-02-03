import React from 'react'
import blogImage from '../ChatGPT_Image_Feb_2__2026__01_39_34_PM-removebg-preview (1).png'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Top 10 Tips for Organizing a Successful Sports Tournament',
      excerpt: 'Learn the essential strategies and best practices for planning and executing memorable sports events that participants will love.',
      date: '2024-05-15',
      category: 'Sports',
      readTime: '5 min read',
    },
    {
      title: 'The Benefits of Yoga and Wellness Events for Corporate Teams',
      excerpt: 'Discover how wellness events can boost employee morale, reduce stress, and improve team collaboration in the workplace.',
      date: '2024-05-10',
      category: 'Wellness',
      readTime: '4 min read',
    },
    {
      title: 'How to Choose the Perfect Venue for Your Event',
      excerpt: 'A comprehensive guide to selecting the ideal location that matches your event requirements and budget constraints.',
      date: '2024-05-05',
      category: 'Planning',
      readTime: '6 min read',
    },
    {
      title: 'Community Building Through Sports: Success Stories',
      excerpt: 'Inspiring stories of how sports events have brought communities together and created lasting positive impacts.',
      date: '2024-04-28',
      category: 'Community',
      readTime: '7 min read',
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

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
            <img src={blogImage} alt="Blog" className="blog-image" />
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
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{formatDate(post.date)}</span>
                  <a href="#" className="blog-read-more">
                    Read More →
                  </a>
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
