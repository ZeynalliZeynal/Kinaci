export default function CommentCard({ comments, onToggleExpand }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
      {comments.map((comment) => (
        <div
          className={`grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 shadow-comments ${comment.isExpanded ? 'bg-orange-500 text-white' : 'bg-white'} rounded-xl p-[30px]`}
          key={comment.id}
        >
          <div>
            <span
              className={`rounded-full ${comment.isExpanded ? 'bg-white' : 'bg-blue-900/10'} p-6`}
            >
              <img src={comment.img} alt={comment.name} />
            </span>
          </div>
          <div
            className={`flex flex-col gap-8 ${comment.isExpanded ? 'text-white' : 'text-blue-900'} items-start`}
          >
            <div>
              <h4 className="font-semibold">{comment.name}</h4>
              {comment.jobStatus && (
                <p
                  className={`${comment.isExpanded ? 'text-white' : 'text-orange-500'} text-sm`}
                >
                  {comment.jobStatus}
                </p>
              )}
            </div>
            <p className="text-sm">
              {comment.isExpanded
                ? comment.comment
                : comment.comment.split(' ').slice(0, 20).join(' ') + '...'}
            </p>
            <button
              className={`text-sm font-medium ${comment.isExpanded ? 'text-white hover:bg-neutral-600/15' : 'text-blue-500 hover:bg-blue-500/15'} rounded-lg py-1 px-2 duration-250`}
              onClick={() => onToggleExpand(comment.id)}
            >
              {comment.isExpanded ? 'Daralt' : 'Genişlət'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
