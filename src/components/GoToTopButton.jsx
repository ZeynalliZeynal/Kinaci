import { RxDoubleArrowUp } from 'react-icons/rx'

export default function GoToTopButton() {
  return (
    <div className="fixed bottom-12 right-12 z-[500]">
      <button
        className="p-4 bg-white shadow-button rounded-full relative text-blue-900 hover:text-white group overflow-hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="size-6 relative z-20">
          <RxDoubleArrowUp />
        </span>
        <span className="inset-0 rounded-full z-10 absolute bg-orange-500 translate-y-full group-hover:translate-y-0 transition" />
      </button>
    </div>
  )
}
