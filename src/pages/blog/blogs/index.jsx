import Categories from '~/pages/blog/categories/index.jsx'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { usePagePagination } from '~/hooks/usePagePagination.js'
import PaginationButtons from '~/pages/comments/PaginationButtons.jsx'
import BlogSkeleton from '~/pages/blog/blogs/BlogSkeleton.jsx'
import { Link, useSearchParams } from 'react-router-dom'
import { baseURL } from '~/data/consts.js'
import NoProduct from '~/components/NoProduct.jsx'

const initialState = {
  blogs: [],
  tags: [],
  values: {
    title: '',
    selectedTags: [],
  },

  totalItems: 0,
  isLoading: false,
  currentPage: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return { ...state, blogs: action.payload }
    case 'SET_TAGS':
      return { ...state, tags: action.payload }
    case 'SET_VALUES':
      return { ...state, values: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: !state.isLoading }
    case 'SET_TOTAL_ITEMS':
      return { ...state, totalItems: action.payload }
  }
}

export default function Blogs() {
  const [{ blogs, isLoading, totalItems }, dispatch] = useReducer(
    reducer,
    initialState,
  )

  const [searchParams] = useSearchParams()

  const itemsPerPage = 6

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    blogs,
    itemsPerPage,
  )

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch({ type: 'SET_LOADING' })
        const res = await axios.get(`${baseURL}/data/blogs`)
        const data = res.data

        const filteredData = data.filter((blog) => {
          console.log(searchParams.get('blogTags'))
          return (
            (searchParams.get('blogTitle') === null ||
              blog.title
                .toLowerCase()
                .includes(searchParams.get('blogTitle').toLowerCase())) &&
            (searchParams.get('blogTags') === null ||
              blog.tags.some((tag) =>
                searchParams
                  .get('blogTags')
                  .toLowerCase()
                  .includes(tag.toLowerCase()),
              ))
          )
        })
        dispatch({ type: 'SET_TOTAL_ITEMS', payload: filteredData.length })
        dispatch({ type: 'SET_BLOGS', payload: filteredData })

        const uniqueTags = Array.from(
          new Set(data.flatMap((blog) => blog.tags)),
        )
        dispatch({ type: 'SET_TAGS', payload: uniqueTags })
      } catch (err) {
        console.warn(err)
      } finally {
        dispatch({ type: 'SET_LOADING' })
      }
    }
    fetchBlogs()
  }, [searchParams])

  return (
    <section className="text-blue-900">
      <div className="container">
        <div className="mb-8">
          <h2>Bloq</h2>
          <p className="text-sm">
            <b>{totalItems}</b> nəticə tapıldı.
          </p>
        </div>

        <div className="flex xl:flex-row flex-col gap-[50px]">
          {!blogs.length || isLoading ? (
            totalItems !== 0 ? (
              <BlogSkeleton />
            ) : (
              <div className="w-full xl:w-[770px]">
                <NoProduct />
              </div>
            )
          ) : (
            <div className="grid w-full xl:w-[770px] order-2 xl:order-1 gap-[30px]">
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
