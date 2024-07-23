import { useFindUser } from '~/features/auth/useFindUser.js';

export default function ShortInfo({ estateItem = {} }) {
  const {
    city,
    type,
    place,
    floors,
    furniture,
    rooms,
    user_id,
    sea_view,
    constructor_date,
    property_deed,
    mortgage,
  } = estateItem;

  const { user } = useFindUser(user_id);

  return (
    <div className="text-blue-900 grid gap-5">
      <h3 className="text-5xl">Qısa məlumat</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2.5">
        <li className="justify-start">
          {city} {place && ` / ${place}`}
        </li>
        <li className="justify-start">Mərtəbələr: {floors}</li>
        <li className="justify-start">Əmlak növü: {type}</li>
        <li className="justify-start">Mebel: {furniture ? 'Bəli' : 'Xeyr'}</li>
        <li className="justify-start">Otaqlar: {rooms}</li>
        {sea_view && (
          <li className="justify-start">
            Dəniz mənzərəsi: {sea_view ? 'Bəli' : 'Xeyr'}
          </li>
        )}
        <li className="justify-start">
          Təklif: {user?.user_metadata.fullName}
        </li>
        {constructor_date && (
          <li className="justify-start">
            Tikinti ili:{' '}
            {new Intl.DateTimeFormat('az-AZ', {
              year: 'numeric',
            }).format(new Date(constructor_date))}{' '}
          </li>
        )}
        <li className="justify-start">
          Çıxarış: {property_deed ? 'Bəli' : 'Xeyr'}
        </li>
        <li className="justify-start">Ipoteka: {mortgage ? 'Bəli' : 'Xeyr'}</li>
      </ul>
    </div>
  );
}
