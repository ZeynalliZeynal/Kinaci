import { useReplies } from '~/features/blogs/useReplies.js';
import BlogCommentItem from '~/features/blogs/blogItem/commentSection/BlogCommentItem.jsx';

const BlogCommentReplies = ({ commentId }) => {
  const { replies, isPending } = useReplies(commentId);

  return (
    <ul className="flex-col justify-start divide-y divide-gray-200 w-full scale-90">
      {replies?.map(({ id, user_id, reply, created_at }) => (
        <li className="w-full gap-4 grid grid-cols-1 py-4" key={id}>
          <BlogCommentItem
            replyId={id}
            replierId={user_id}
            createdAt={created_at}
          />
          <p className="text-sm">{reply}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogCommentReplies;
