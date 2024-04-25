import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '~/components/search'
import BlogItemSection from './BlogItemSection'
import ShareBlog from './ShareBlog'
import OtherBlogs from './OtherBlogs'
import CommentSection from './commentSection'
import { baseURL } from '~/data/consts'

export default function BlogItem() {
  const { id } = useParams()
  const [blogItem, setBlogItem] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/blogs/${id}`)
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
      <CommentSection blog={blogItem} />
    </main>
  )
}
