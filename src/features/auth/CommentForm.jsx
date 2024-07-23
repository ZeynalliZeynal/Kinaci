import { useForm } from 'react-hook-form';
import { useUser } from '~/features/auth/useUser.js';
import { usePostComment } from '~/features/blogs/usePostComment.js';
import SpinnerMini from '~/components/SpinnerMini.jsx';
import { useBlog } from '~/features/blogs/useBlog.js';

export default function CommentForm() {
  const { handleSubmit, register, reset, getValues, formState } = useForm();
  const { blog } = useBlog();
  const { errors } = formState;

  const { isAuthenticated, user } = useUser();

  const { post, isPosting } = usePostComment();

  const onSubmit = ({ comment }) => {
    post({ user_id: user?.id, blog_id: blog?.id, comment });
    reset();
  };

  return (
    <form className="text-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <label htmlFor="comment" className="flex-1 font-medium">
          Şərh
          <span className="transition-colors my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs cursor-default">
            <textarea
              placeholder="Şərh əlavə et"
              id="comment"
              {...register('comment', {
                required: 'Boş ola bilməz',
                maxLength: {
                  value: 200,
                  message: 'Maksimum limit 200 simvoldur',
                },
              })}
            />
          </span>
        </label>{' '}
        {errors?.comment && (
          <span className="text-xs w-full text-end text-red-600">
            {errors?.comment.message}
          </span>
        )}
      </div>
      <button
        type={'submit'}
        className={`select-none px-[30px] py-3 rounded-lg border-2 border-blue-900 bg-white text-md font-semibold hover:bg-blue-900 hover:text-white mt-[30px]`}
      >
        {isPosting ? <SpinnerMini /> : 'Şərhi Göndər'}
      </button>
    </form>
  );
}
