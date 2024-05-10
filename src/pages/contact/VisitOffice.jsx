import { adminInfo } from '~/data/adminInfo/index.jsx';
import { LiaInstagram, LiaTelegram, LiaWhatsapp } from 'react-icons/lia';

export default function VisitOffice() {
  const currentDate = new Date();
  let isOfficeOpen;
  if (currentDate.getDay() === 7) isOfficeOpen = false;
  else if (
    currentDate.getHours() >= 9 &&
    currentDate.getHours() < 19 &&
    currentDate.getDate() <= 5
  )
    isOfficeOpen = true;
  else if (
    currentDate.getHours() >= 10 &&
    currentDate.getHours() < 17 &&
    currentDate.getDate() === 6
  )
    isOfficeOpen = true;
  else isOfficeOpen = false;
  return (
    <>
      <section className="container">
        <div className="text-center space-y-3">
          <h2>Ofisimizi ziyarət edin</h2>
          <p>
            Rieltorun hər ölçüdə və yerləşmə potensialında 10.000-dən çox ofisi
            var.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 my-8 gap-6">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-2xl">Ümumi mərkəz</h3>
            <div className="flex flex-col">
              <p>Mahmutlar Yangılı cad 11</p>
              <p>Alanya / Turkey</p>
            </div>
          </div>
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-2xl">Əlaqə nömrələrimiz</h3>
            <div className="flex flex-col">
              <a href={`tel:${adminInfo.tel}`} className="underline">
                {adminInfo.tel}
              </a>
              <a href={`mailto:${adminInfo.email}`} className="underline">
                {adminInfo.email}
              </a>
            </div>
            <ul className="gap-2">
              {adminInfo.socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.link} target="_blank" className="text-white">
                    {link.name === 'Instagram' ? (
                      <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-full p-1 instagram-bg">
                        <span className="relative z-10">
                          <LiaInstagram />
                        </span>
                      </span>
                    ) : link.name === 'Telegram' ? (
                      <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-full p-1 telegram-bg">
                        <span className="relative z-10">
                          <LiaTelegram />
                        </span>
                      </span>
                    ) : link.name === 'Whatsapp' ? (
                      <span className="overflow-hidden inline-flex justify-center items-center size-7 rounded-full p-1 whatsapp-bg">
                        <span className="relative z-10">
                          <LiaWhatsapp />
                        </span>
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-2xl">İş saatlarımız</h3>
            <div className="flex flex-col">
              <time>Bazar ertəsi-Cümə: 9:00-19:00</time>
              <time>Şənbə: 10:00-17:00</time>
              <span className="text-sm italic text-orange-500">
                {isOfficeOpen ? 'Açqdır' : 'Bağlıdır'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
