import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BlogPostDetail from './BlogPostDetail'
import { blogPosts } from '../data/blogPostsData'

const BlogPostPage = () => {
  const { postIndex } = useParams()
  const index = parseInt(postIndex, 10)
  const post = Number.isNaN(index) || index < 0 || index >= blogPosts.length
    ? null
    : blogPosts[index]

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="App">
      <Header activeSection="blog" />
      <BlogPostDetail post={post} />
      <Footer />
    </div>
  )
}

export default BlogPostPage
