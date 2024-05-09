import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

export default function ContactLocation() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'wbueeSAGOUGUUWg6VS3T';
  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: '#FF0000' })
      .setLngLat([139.7525, 35.6846])
      .addTo(map.current);
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <section>
      <div className="container max-w-full">
        <div ref={mapContainer} className="h-[500px] w-full absolute" />
      </div>
    </section>
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
