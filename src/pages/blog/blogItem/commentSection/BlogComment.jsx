import moment from 'moment'

export default function BlogComment({ comments }) {
  return (
    <>
      {comments.length > 0 && (
        <div className="flex">
          <ul className="flex-col justify-start divide-y divide-gray-200 w-full">
            {comments.map(({ id, image, name, date, comment, replies }) => (
              <li key={id} className="w-full gap-4 grid grid-cols-1 py-4">
                <div className="flex w-full justify-between items-end">
                  <div className="flex gap-5">
                    <span className="size-[70px] rounded-full overflow-hidden">
                      <img src={image} alt={name} />
                    </span>
                    <div className="grid place-content-between py-1">
                      <h4 className="text-md font-semibold">{name}</h4>
                      <time className="text-xs">
                        {moment(date).startOf('seconds').fromNow()}
                      </time>
                    </div>
                  </div>
                  <button className="h-fit rounded-lg text-xs font-semibold text-blue-500 items-end hover:bg-blue-500/15 py-1 px-2 disabled">
                    Cavab ver
                  </button>
                </div>
                <p className="text-sm">{comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
