export default function ReviewCard({ reviews, onToggleExpand, activeReview }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
      {reviews.map(({ id, avatar, user_name, comment, job_status }) => (
        <div
          className={`grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 shadow-comments ${activeReview === id ? 'bg-orange-500 text-white' : 'bg-white'} rounded-xl p-[30px]`}
          key={id}
        >
          <div>
            <span
              className={`rounded-full ${activeReview === id ? 'bg-white' : 'bg-blue-900/10'} p-6`}
            >
              <img src={avatar} alt={user_name} />
            </span>
          </div>
          <div
            className={`flex flex-col gap-8 ${activeReview === id ? 'text-white' : 'text-blue-900'} items-start`}
          >
            <div>
              <h4 className="font-semibold">{user_name}</h4>
              {job_status && (
                <p
                  className={`${activeReview === id ? 'text-white' : 'text-orange-500'} text-sm`}
                >
                  {job_status}
                </p>
              )}
            </div>
            <p className="text-sm">
              {activeReview === id
                ? comment
                : comment.split(' ').slice(0, 20).join(' ') + '...'}
            </p>
            <button
              className={`text-sm font-medium ${activeReview === id ? 'text-white hover:bg-neutral-600/15' : 'text-blue-500 hover:bg-blue-500/15'} rounded-lg py-1 px-2 duration-250`}
              onClick={() =>
                activeReview === id ? onToggleExpand(-1) : onToggleExpand(id)
              }
            >
              {activeReview === id ? 'Daralt' : 'Genişlət'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
