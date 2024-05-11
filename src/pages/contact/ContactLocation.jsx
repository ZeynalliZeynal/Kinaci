import { useEffect, useRef, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import LoginForm from '~/components/loginForm/index.jsx';
import { useActiveAccount } from '~/redux/selectors.js';
import { adminInfo } from '~/data/adminInfo/index.jsx';
import { useScrollToRef } from '~/hooks/useScrollTo.js';

const position = [32.08960103931366, 36.49760354536997];

export default function ContactLocation() {
  const ref = useScrollToRef();
  const activeAccount = useActiveAccount();
  const [isOpen, setIsOpen] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(16);
  maptilersdk.config.apiKey = 'wbueeSAGOUGUUWg6VS3T';
  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: position,
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: '#FF0000' })
      .setLngLat(position)
      .addTo(map.current);
  }, [zoom]);

  return (
    <>
      <LoginForm isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <section ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div ref={mapContainer} className="h-[300px] rounded-xl" />
            <div className="flex flex-col gap-4">
              <h2>Sizdən eşitməyi çox istərdik.</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur. Hər kəs və pişik azad
                olmamalıdır. Əslində, məhsulu reklam etmək üçün ev tapşırığı da
                yoxdur. Tortor eleifend diam indi içir. İndi bu urna ilə
                hamiləsiniz.
              </p>
              {activeAccount ? (
                <a
                  href={`tel:${adminInfo.tel}`}
                  className="px-3 py-2 bg-blue-500 text-white rounded-xl w-fit font-semibold"
                >
                  {adminInfo.tel}
                </a>
              ) : (
                <button
                  className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white"
                  onClick={() => setIsOpen(true)}
                >
                  Bizimlə əlaqə saxlayın
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*

        <MapContainer
          center={[-3.745, -38.523]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[500px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-3.745, -38.523]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
 */
