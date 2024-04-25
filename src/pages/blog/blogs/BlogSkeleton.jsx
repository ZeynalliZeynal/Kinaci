import Skeleton from '~/components/Skeleton.jsx'

const BlogSkeleton = () => {
  return (
    <div className="grid w-full xl:w-[770px] order-2 xl:order-1 gap-[30px]">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="shadow-blogs rounded-xl">
          <div className="h-[450px]">
            <Skeleton className="h-full" />
          </div>
          <div className="px-[30px] py-5 space-y-4">
            <div className="h-[13px]">
              <Skeleton className="h-full" />
            </div>
            <div className="h-5">
              <Skeleton className="h-full" />
            </div>
          </div>
        </div>
      ))}{' '}
    </div>
  )
}

export default BlogSkeleton
