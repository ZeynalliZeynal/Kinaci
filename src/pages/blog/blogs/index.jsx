import Categories from '~/pages/blog/categories/index.jsx'
import { useReducer } from 'react'
import { usePagePagination } from '~/hooks/usePagePagination.js'
import BlogSkeleton from '~/pages/blog/blogs/BlogSkeleton.jsx'
import NoProduct from '~/components/NoProduct.jsx'
import { useBlogs } from '~/hooks/useBlogs.js'
import BlogsList from '~/pages/blog/blogs/BlogsList.jsx'
import { initialState, reducer } from '~/reducers/blogsReducer.js'

export default function Blogs() {
  const [{ blogs, isLoading, totalItems }, dispatch] = useReducer(
    reducer,
    initialState,
  )

  const itemsPerPage = 6

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    blogs,
    itemsPerPage,
  )

  useBlogs(dispatch)

  return (
    <section className="text-blue-900">
      <div className="container">
        <div className="mb-8">
          <h2>Bloq</h2>
          <p className="text-sm">
            {typeof totalItems === 'string' ? (
              <b>{totalItems}</b>
            ) : (
              <>
                <b>{totalItems}</b> nəticə tapıldı.
              </>
            )}
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
            <BlogsList
              currentItems={currentItems}
              pageNumbers={pageNumbers}
              paginate={paginate}
            />
          )}{' '}
          <Categories />
        </div>
      </div>
    </section>
  )
}
