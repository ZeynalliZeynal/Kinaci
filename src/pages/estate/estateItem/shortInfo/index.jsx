export default function ShortInfo({ estateItem }) {
  return (
    <div className="text-blue-900 grid gap-5">
      <h3 className="text-5xl">Qısa məlumat</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2.5">
        <li className="justify-start">
          {estateItem?.location.city}{' '}
          {estateItem?.location.place && ` / ${estateItem?.location.place}`}
        </li>
        <li className="justify-start">Mərtəbələr: {estateItem?.floors}</li>
        {estateItem?.distances.center && (
          <li className="justify-start">
            Mərkəzə: {estateItem.distances.center}km
          </li>
        )}
        <li className="justify-start">Əmlak növü: {estateItem?.type}</li>
        <li className="justify-start">
          Mebel: {estateItem?.furniture ? 'Bəli' : 'Xeyr'}
        </li>
        {estateItem?.distances.airport && (
          <li className="justify-start">
            Hava Limanına: {estateItem.distances.airport}km
          </li>
        )}
        <li className="justify-start">Otaqlar: {estateItem?.rooms}</li>
        {estateItem?.sea_view && (
          <li className="justify-start">
            Dəniz mənzərəsi: {estateItem.sea_view ? 'Bəli' : 'Xeyr'}
          </li>
        )}
        <li className="justify-start">Təklif: {estateItem?.offer}</li>
        {estateItem?.distances.sea && (
          <li className="justify-start">
            Dənizə: {estateItem.distances.sea}km
          </li>
        )}{' '}
        {estateItem?.constructor_date && (
          <li className="justify-start">
            Tikinti ili:{' '}
            {new Intl.DateTimeFormat('az-AZ', {
              year: 'numeric',
            }).format(new Date(estateItem.constructor_date))}{' '}
          </li>
        )}
        <li className="justify-start">
          Çıxarış: {estateItem?.property_deed ? 'Bəli' : 'Xeyr'}
        </li>
        <li className="justify-start">
          Ipoteka: {estateItem?.mortgage ? 'Bəli' : 'Xeyr'}
        </li>
      </ul>
    </div>
  )
}
