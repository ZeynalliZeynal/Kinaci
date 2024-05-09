import CategoriesSearch from '~/pages/blog/categories/CategoriesSearch.jsx';
import CategoriesLastSent from '~/pages/blog/categories/CategoriesLastSent.jsx';
import CategoriesTags from '~/pages/blog/categories/CategoriesTags.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '~/data/consts.js';

export default function Categories() {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/blogs`);
        const data = res.data;

        setBlogs(data);

        const uniqueTags = Array.from(
          new Set(data.flatMap((blog) => blog.tags)),
        );
        setTags(uniqueTags);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <aside className="flex-1 xl:order-2 order-1 space-y-[30px]">
      <div className="sticky top-16">
        <CategoriesSearch />
        <CategoriesLastSent blogs={blogs} />
        <CategoriesTags tags={tags} />
      </div>
    </aside>
  );
}
