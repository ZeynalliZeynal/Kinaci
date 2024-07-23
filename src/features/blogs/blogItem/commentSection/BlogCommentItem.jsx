import moment from 'moment/moment.js';
import { useFindUser } from '~/features/auth/useFindUser.js';
import { Trash2 } from 'lucide-react';
import { useUser } from '~/features/auth/useUser.js';
import { useDeleteComment } from '~/features/blogs/useDeleteComment.js';
import SpinnerMini from '~/components/SpinnerMini.jsx';
import { useContext } from 'react';
import { ReplyContext } from '~/features/blogs/blogItem/index.jsx';
import { useDeleteReply } from '~/features/blogs/useDeleteReply.js';

const BlogCommentItem = ({
  commentId,
  commenterId,
  createdAt,
  replyId,
  replierId,
}) => {
  const { setReplyTo } = useContext(ReplyContext);
  const { user: currentUser } = useUser();
  const { user: commenter } = useFindUser(commenterId);
  const { user: replier } = useFindUser(replierId);
  const { deleteComment, isDeleting: isDeletingComment } = useDeleteComment();
  const { deleteReply, isDeleting: isDeletingReply } = useDeleteReply();

  const handlePostReply = () => {
    const commentInput = document.getElementById('comment');
    setReplyTo({ commentId, userId: commenterId });

    commentInput.focus();
  };

  return (
    <div className="flex w-full justify-between items-end">
      <div className="flex gap-5">
        <span className="size-[70px] rounded-full overflow-hidden">
          <img
            src={
              commenter?.user_metadata.avatar ||
              replier?.user_metadata.avatar ||
              '/image/default_user_pp.png'
            }
            alt={
              commenter?.user_metadata.fullName ||
              replier?.user_metadata.fullName
            }
          />
        </span>
        <div className="grid place-content-between py-1">
          <h4 className="text-md font-semibold">
            {commenter?.user_metadata.fullName ||
              replier?.user_metadata.fullName}
          </h4>
          <time className="text-xs">
            {moment(createdAt).startOf('seconds').fromNow()}
          </time>
        </div>
      </div>
      <div className="flex">
        {!replyId && (
          <button
            className="h-fit rounded-lg text-xs font-semibold text-blue-500 items-end hover:bg-blue-500/15 py-1 px-2"
            onClick={handlePostReply}
          >
            Cavab ver
          </button>
        )}{' '}
        {currentUser?.id === commenterId &&
          (isDeletingComment ? (
            <SpinnerMini />
          ) : (
            <button
              className="size-6 text-red-600 hover:bg-red-600/15 rounded-lg p-1"
              onClick={() => deleteComment(commentId)}
            >
              <Trash2 />
            </button>
          ))}{' '}
        {currentUser?.id === replierId &&
          (isDeletingReply ? (
            <SpinnerMini />
          ) : (
            <button
              className="size-6 text-red-600 hover:bg-red-600/15 rounded-lg p-1"
              onClick={() => deleteReply(replyId)}
            >
              <Trash2 />
            </button>
          ))}
      </div>
    </div>
  );
};

export default BlogCommentItem;
