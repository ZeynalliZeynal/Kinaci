import EstatePrice from '~/pages/estate/estateItem/estateInfo/asideSection/estatePrice/index.jsx';
import UserInfo from './userInfo';
import ContactIcons from '~/components/ContactIcons.jsx';
import { Link } from 'react-router-dom';
import { useEstateCities } from '~/features/filters/useEstateCities.js';

export default function AsideSection({ estateItem }) {
  const { cities, isPending } = useEstateCities();

  return (
    <aside className="px-2 mb-5 text-blue-900">
      <div className="container sticky top-4">
        <div className="grid gap-4">
          <div className="estate-id py-4 w-full text-orange-600 rounded-xl bg-orange-200 font-semibold flex justify-center">
            Əmlak nömrəsi: {estateItem?.id}
          </div>
          <EstatePrice estateItem={estateItem} />
          <UserInfo estateItem={estateItem} />
          <div className="print-hidden shadow-section rounded-xl p-[30px] bg-white">
            <h3 className="text-4xl font-semibold">Məzmunu Paylaşın</h3>
            <div className="flex justify-start w-full mt-2">
              <ContactIcons />
            </div>
          </div>
          <div className="shadow-section rounded-xl p-[30px] bg-white">
            <h3 className="text-4xl font-semibold">
              Digər Bölgələrdəki Əmlaklar
            </h3>
            <ul className="gap-2.5 flex-col text-md mt-5 justify-start">
              {cities?.map((city) => (
                <li key={city.id} className="w-full justify-start">
                  <Link
                    to={`/estate?cities=${city.label}`}
                    className={
                      estateItem?.city === city.label ? 'font-semibold' : ''
                    }
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
