import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Comment from '~/pages/comments/Comment.jsx'
import { useScrollToRef } from '~/hooks/useScrollTo.js'

export default function Comments() {
  const ref = useScrollToRef()

  useEffect(() => {
    document.title = 'Kinaci - Şərhlər'
  }, [])

  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section ref={ref} className="py-[50px]">
        <div className="container">
          <Comment />
        </div>
      </section>
    </main>
  )
}
