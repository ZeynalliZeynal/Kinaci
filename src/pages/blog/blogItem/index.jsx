import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '~/components/search/index.jsx'
import BlogItemSection from '~/pages/blog/blogItem/BlogItemSection.jsx'
import ShareBlog from '~/pages/blog/blogItem/ShareBlog.jsx'
import OtherBlogs from '~/pages/blog/blogItem/OtherBlogs.jsx'
import CommentsSection from '~/pages/blog/blogItem/Comments.jsx'

export default function BlogItem() {
  const { id } = useParams()
  const [blogItem, setBlogItem] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://kinaci-server.onrender.com/data/blogs/${id}`,
        )
        const data = res.data
        setBlogItem(data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchBlogs()
  }, [id])
  return (
    <main className="text-blue-900">
      <section className="bg-orange-50">
        <Search />
      </section>
      <BlogItemSection blog={blogItem} />
      <ShareBlog blog={blogItem} />
      <OtherBlogs blog={blogItem} />
      <CommentsSection blog={blogItem} />
    </main>
  )
}
