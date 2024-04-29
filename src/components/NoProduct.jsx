import Lottie from 'lottie-react'
import animationData from '~/assets/img/empty-box.json'

export default function NoProduct() {
  return (
    <div className="size-[400px] grid justify-center w-full pointer-events-none select-none">
      <h2 className="text-5xl text-center">Əmlak tapılmadı :(</h2>
      <Lottie animationData={animationData} />
    </div>
  )
}
