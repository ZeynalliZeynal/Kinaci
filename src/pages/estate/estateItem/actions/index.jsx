import Svg from '~/components/Svg.jsx'

export default function Actions() {
  return (
    <div className="px-8 py-6 grid justify-center gap-3">
      <p>
        Bu əmlak və onun <b>qiymət siyahısı</b>, satınalma prosedurunun
        mərhələləri, mümkün <b>endirimlər</b> və s. haqqında tam məlumat
        alacaqsınız.
      </p>
      <div className="favourite text-md flex justify-start gap-4">
        {Array.from({ length: 2 }, (_, index) => (
          <button
            className={`rounded-xl px-5 py-3 border hover:text-white ${index === 0 ? 'border-blue-400 text-blue-400 hover:bg-blue-400' : 'border-red-600 text-red-600 hover:bg-red-600'}`}
            key={index}
          >
            {index === 0 ? (
              <span className="inline-flex items-center gap-2">
                Müqayisə et
                <span className="size-4">
                  <Svg svgType="compare" />
                </span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                Seçilmişlərə əlavə et
                <span className="size-4">
                  <Svg svgType="heart" />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
