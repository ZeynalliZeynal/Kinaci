import Skeleton from '~/components/Skeleton.jsx'

export default function CommentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] h-full">
      {Array.from({ length: 10 }, (_, i) => (
        <div className="grid grid-cols-[160px_1fr] gap-6 h-[300px]" key={i}>
          <div className="size-[160px] rounded-full overflow-hidden">
            <Skeleton className="p-6 size-full" />
          </div>

          <div className="flex flex-col gap-8 items-start">
            <Skeleton className="p-4" />
            <Skeleton className="p-2" />
            <Skeleton className="p-10" />
          </div>
        </div>
      ))}
    </div>
  )
}
