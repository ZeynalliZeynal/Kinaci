import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '~/components/search/index.jsx'
import BlogItemSection from '~/pages/blog/blogItem/BlogItemSection.jsx'

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
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <BlogItemSection blog={blogItem} />
    </main>
  )
}
