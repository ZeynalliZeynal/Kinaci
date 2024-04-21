import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Blogs from '~/pages/blog/blogs/index.jsx'
import ShareBlog from '~/pages/blog/blogItem/ShareBlog.jsx'

export default function Blog() {
  useEffect(() => {
    document.title = 'Kinaci - Bloq'
  }, [])
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <Blogs />
    </main>
  )
}
