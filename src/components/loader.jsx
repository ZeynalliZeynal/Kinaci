import animationData from '~/assets/img/loading.json'
import Lottie from 'lottie-react'

export default function Loader() {
  return (
    <section className="size-[500px] grid justify-center w-full pointer-events-none">
      <Lottie animationData={animationData} />
    </section>
  )
}
