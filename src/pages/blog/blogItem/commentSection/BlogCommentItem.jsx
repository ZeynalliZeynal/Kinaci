import moment from 'moment/moment.js';
import { useFindUser } from '~/features/auth/useFindUser.js';
import { Trash2 } from 'lucide-react';
import { useUser } from '~/features/auth/useUser.js';
import { useDeleteComment } from '~/features/blogs/useDeleteComment.js';
import SpinnerMini from '~/components/SpinnerMini.jsx';

const BlogCommentItem = ({ commentId, userId, createdAt }) => {
  const { user: currentUser } = useUser();
  const { user } = useFindUser(userId);
  const { deleteComment, isDeleting } = useDeleteComment();

  return (
    <div className="flex w-full justify-between items-end">
      <div className="flex gap-5">
        <span className="size-[70px] rounded-full overflow-hidden">
          <img
            src={user?.user_metadata.avatar || '/image/default_user_pp.png'}
            alt={user?.user_metadata.fullName}
          />
        </span>
        <div className="grid place-content-between py-1">
          <h4 className="text-md font-semibold">
            {user?.user_metadata.fullName}
          </h4>
          <time className="text-xs">
            {moment(createdAt).startOf('seconds').fromNow()}
          </time>
        </div>
      </div>
      <div className="flex">
        <button className="h-fit rounded-lg text-xs font-semibold text-blue-500 items-end hover:bg-blue-500/15 py-1 px-2">
          Cavab ver
        </button>
        {currentUser?.id === userId &&
          (isDeleting ? (
            <SpinnerMini />
          ) : (
            <button
              className="size-6 text-red-600 hover:bg-red-600/15 rounded-lg p-1"
              onClick={() => deleteComment(commentId)}
            >
              <Trash2 />
            </button>
          ))}
      </div>
    </div>
  );
};

export default BlogCommentItem;
