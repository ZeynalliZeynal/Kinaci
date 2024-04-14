import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Comment from '~/pages/comments/Comment.jsx'

export default function Comments() {
  useEffect(() => {
    document.title = 'Kinaci - Şərhlər'
  }, [])

  return (
    <main>
      <section>
        <Search />
      </section>
      <section>
        <div className="container">
          <Comment />
        </div>
      </section>
    </main>
  )
}
