import Search from '~/components/search';
import BlogItemSection from './BlogItemSection';
import ShareBlog from './ShareBlog';
import OtherBlogs from './OtherBlogs';
import CommentSection from './commentSection';

export default function BlogItem() {
  return (
    <main className="text-blue-900">
      <section className="bg-orange-50">
        <Search />
      </section>
      <BlogItemSection />
      <ShareBlog />
      <OtherBlogs />
      <CommentSection />
    </main>
  );
}
