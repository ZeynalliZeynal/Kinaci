import moment from 'moment';
import 'moment/locale/az.js';
import { useContext, useEffect } from 'react';
import BlogComment from './BlogComment.jsx';
import { useComments } from '~/features/blogs/useComments.js';
import CommentForm from '~/features/auth/CommentForm.jsx';
import { useBlog } from '~/features/blogs/useBlog.js';
import { useUser } from '~/features/auth/useUser.js';
import { ReplyContext } from '~/features/blogs/blogItem/index.jsx';
import { useFindUser } from '~/features/auth/useFindUser.js';

export default function CommentSection() {
  const { replyTo, setReplyTo } = useContext(ReplyContext);
  const { blog } = useBlog();

  const { user, isAuthenticated } = useUser();
  const { comments } = useComments(blog?.id);
  const { user: replyingTo } = useFindUser(replyTo?.userId);

  moment.locale('az');

  useEffect(() => {
    document.title = `Kinaci Bloq - ${blog?.id}`;
  }, [blog?.id]);

  return (
    <section>
      <div className="container">
        <h3 className="text-lg font-semibold mb-4">
          {comments?.length > 0 ? `${comments.length} Şərh` : 'Şərh yoxdur'}
        </h3>
        <BlogComment blog={blog} />
        <div className="grid border-t-2 border-gray-200 pt-7">
          <h3 className="text-lg font-semibold mb-5">
            {isAuthenticated
              ? `Şərh yaz - ${user?.user_metadata.fullName}`
              : 'Şərh yazmaq üçün daxil olun və ya qeydiyyatdan keçin'}{' '}
            {replyingTo && (
              <div className="font-light text-md text-blue-500">
                Cavab verirsiniz: <b>@{replyingTo?.user_metadata.fullName}</b>
                <button
                  className="hover:bg-orange-600/10 px-2 py-1 rounded-lg text-orange-600"
                  onClick={() => setReplyTo(null)}
                >
                  Ləğv et
                </button>
              </div>
            )}
          </h3>
        </div>
        {isAuthenticated && <CommentForm />}
      </div>
    </section>
  );
}
