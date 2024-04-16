export default function ButtonWithTooltip({ isDisabled = true }) {
  return (
    <button
      className={`relative rounded-xl md:flex hidden bg-orange-500 text-white font-semibold w-full py-[14px] ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      title="Hələ əlçatan deyil"
    >
      Kriptovalyuta ilə ödəniş et
    </button>
  )
}
