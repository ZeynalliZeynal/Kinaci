import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Comment from '~/pages/comments/Comment.jsx'

export default function Comments() {
  useEffect(() => {
    document.title = 'Kinaci - Şərhlər'
  }, [])

  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section className="py-[50px]">
        <div className="container">
          <Comment />
        </div>
      </section>
    </main>
  )
}
