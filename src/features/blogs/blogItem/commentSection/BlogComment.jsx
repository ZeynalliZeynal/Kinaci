import { useComments } from '~/features/blogs/useComments.js';
import BlogCommentItem from '~/features/blogs/blogItem/commentSection/BlogCommentItem.jsx';
import Skeleton from '~/components/Skeleton.jsx';
import BlogCommentReplies from '~/features/blogs/blogItem/commentSection/BlogCommentReplies.jsx';

export default function BlogComment({ blog }) {
  const { comments, isPending } = useComments(blog?.id);
  return (
    <>
      {comments?.length > 0 && (
        <div className="flex">
          {isPending ? (
            <div className="h-[50px]">
              <Skeleton />
            </div>
          ) : (
            <ul className="flex-col justify-start divide-y divide-gray-200 w-full">
              {comments?.map(({ id, comment, created_at, user_id }) => (
                <li key={id} className="w-full gap-4 grid grid-cols-1 py-4">
                  <BlogCommentItem
                    commentId={id}
                    commenterId={user_id}
                    createdAt={created_at}
                  />
                  <p className="text-sm">{comment}</p>
                  <BlogCommentReplies commentId={id} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
