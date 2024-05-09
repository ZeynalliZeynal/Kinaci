import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function ContactLocation() {
  return (
    <section>
      <div className="container max-w-full">
        <MapContainer
          style={{ height: '500px' }}
          center={[51.0, 19.0]}
          zoom={4}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </section>
  );
}
