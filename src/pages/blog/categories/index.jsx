import CategoriesSearch from '~/pages/blog/categories/CategoriesSearch.jsx';
import CategoriesLastSent from '~/pages/blog/categories/CategoriesLastSent.jsx';
import CategoriesTags from '~/pages/blog/categories/CategoriesTags.jsx';
import { useBlogs } from '~/features/blogs/useBlogs.js';

export default function Categories() {
  const { blogs } = useBlogs();

  const allTags = blogs?.flatMap((blog) => blog.tags);

  const uniqueTagsArray = Array.from(new Set(allTags));

  return (
    <aside className="flex-1 xl:order-2 order-1 space-y-[30px]">
      <div className="sticky top-16">
        <CategoriesSearch />
        <CategoriesLastSent blogs={blogs} />
        <CategoriesTags tags={uniqueTagsArray} />
      </div>
    </aside>
  );
}
