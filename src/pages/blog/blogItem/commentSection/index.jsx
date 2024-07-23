import moment from 'moment';
import 'moment/locale/az.js';
import { useEffect, useReducer } from 'react';
import BlogComment from '../commentSection/BlogComment';
import { useComments } from '~/features/blogs/useComments.js';
import CommentForm from '~/features/auth/CommentForm.jsx';
import { useBlog } from '~/features/blogs/useBlog.js';
import { useUser } from '~/features/auth/useUser.js';

export const initialState = {
  countSymbols: 500,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNT_SYMBOLS':
      return {
        ...state,
        countSymbols: initialState.countSymbols - action.payload,
      };
    default:
      return state;
  }
};

export default function CommentSection() {
  const { blog } = useBlog();
  const [{ countSymbols }, dispatch] = useReducer(reducer, initialState);

  const { user, isAuthenticated } = useUser();
  const { comments } = useComments(blog?.id);

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
              : 'Şərh yazmaq üçün daxil olun və ya qeydiyyatdan keçin'}
          </h3>
        </div>
        {isAuthenticated && <CommentForm countSymbols={countSymbols} />}
      </div>
    </section>
  );
}
