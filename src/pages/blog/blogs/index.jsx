import Categories from '~/pages/blog/categories/index.jsx'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { usePagePagination } from '~/hooks/usePagePagination.js'
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx'
import BlogSkeleton from '~/pages/blog/blogs/BlogSkeleton.jsx'
import { Link } from 'react-router-dom'

const url = 'https://kinaci-server.onrender.com/data/blogs'

const initialState = {
  blogs: [],
  isLoading: false,
  currentPage: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return { ...state, blogs: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: !state.isLoading }
  }
}

export default function Blogs() {
  const [{ blogs, isLoading }, dispatch] = useReducer(reducer, initialState)

  const itemsPerPage = 6

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    blogs,
    itemsPerPage,
  )

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch({ type: 'SET_LOADING' })
        const res = await axios.get(url)
        const data = res.data
        dispatch({ type: 'SET_BLOGS', payload: data })
      } catch (err) {
        console.warn(err)
      } finally {
        dispatch({ type: 'SET_LOADING' })
      }
    }
    fetchBlogs()
  }, [])

  return (
    <section className="text-blue-900">
      <div className="container">
        <h2 className="mb-8">Bloq</h2>

        <div className="grid grid-cols-[770px_1fr] gap-[50px]">
          {isLoading ? (
            <BlogSkeleton />
          ) : (
            <div className="grid gap-[30px]">
              {currentItems.map(({ id, title, tags, image, description }) => (
                <Link
                  to={`/blog/${id}`}
                  key={id}
                  className="rounded-xl shadow-blogs overflow-hidden block"
                >
                  <div className="h-[450px]">
                    <img src={image} alt={title} />
                  </div>
                  <div className="px-[30px] py-5 space-y-4">
                    <p className="text-xs text-blue-900/70">
                      {tags.map((tag, i) =>
                        i === tags.length - 1 ? tag : tag + ', ',
                      )}
                    </p>
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="text-sm line-clamp-2">{description}</p>
                  </div>
                </Link>
              ))}{' '}
              <PaginationButtons
                pageNumbers={pageNumbers}
                paginate={paginate}
              />
            </div>
          )}{' '}
          <Categories />
        </div>
      </div>
    </section>
  )
}
