import Search from '~/components/search/index.jsx';
import BlogItemSection from './BlogItemSection.jsx';
import ShareBlog from './ShareBlog.jsx';
import OtherBlogs from './OtherBlogs.jsx';
import CommentSection from './commentSection/index.jsx';
import { createContext, useState } from 'react';

export const ReplyContext = createContext(null);

const ReplyProvider = ({ children }) => {
  const [replyTo, setReplyTo] = useState({
    commentId: 0,
    userId: 0,
  });
  return (
    <ReplyContext.Provider
      value={{
        replyTo,
        setReplyTo,
      }}
    >
      {children}
    </ReplyContext.Provider>
  );
};

export default function BlogItem() {
  return (
    <main className="text-blue-900">
      <section className="bg-orange-50">
        <Search />
      </section>
      <BlogItemSection />
      <ShareBlog />
      <OtherBlogs />
      <ReplyProvider>
        <CommentSection />
      </ReplyProvider>
    </main>
  );
}
