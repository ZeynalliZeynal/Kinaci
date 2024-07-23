import Categories from '~/pages/blog/categories/index.jsx';
import { usePagePagination } from '~/hooks/usePagePagination.js';
import BlogSkeleton from '~/features/blogs/BlogSkeleton.jsx';
import NoProduct from '~/components/NoProduct.jsx';
import BlogsList from '~/features/blogs/BlogsList.jsx';
import { useScrollToRef } from '~/hooks/useScrollTo.js';
import { useBlogs } from '~/features/blogs/useBlogs.js';
import { useSearchParams } from 'react-router-dom';

export default function Blogs() {
  const [searchParams] = useSearchParams();

  const { blogs, isPending } = useBlogs(
    searchParams && {
      title: searchParams.get('blogTitle'),
      tags: searchParams.get('blogTags'),
    },
  );
  const ref = useScrollToRef();

  const itemsPerPage = 4;

  const [currentItems, pageNumbers, paginate] = usePagePagination(
    blogs,
    itemsPerPage,
  );

  return (
    <section ref={ref} className="text-blue-900">
      <div className="container">
        <div className="mb-8">
          <h2>Bloq</h2>
          <p className="text-sm">
            {blogs?.length ? (
              <>
                <b>{blogs.length}</b> nəticə tapıldı.
              </>
            ) : (
              <>
                <b>Nəticə tapılmadı.</b>
              </>
            )}
          </p>
        </div>

        <div className="flex xl:flex-row flex-col gap-[50px]">
          {!blogs?.length || isPending ? (
            blogs?.length !== 0 ? (
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
  );
}
