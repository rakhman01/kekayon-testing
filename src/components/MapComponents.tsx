'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cars = [
  { id: 1, lat: 51.505, lng: -0.09, title: 'Car 1', address: 'Address 1', price: '$10,000' },
  { id: 2, lat: 51.515, lng: -0.1, title: 'Car 2', address: 'Address 2', price: '$15,000' },
];

export default function MapComponent() {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="w-full h-screen rounded-md shadow-md"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cars.map((car) => (
          <Marker key={car.id} position={[car.lat, car.lng]}>
            <Popup>
              <div className="p-2 text-center">
                <h3 className="text-lg font-bold">{car.title}</h3>
                <img
                  src="/path/to/selected-marker-icon.png"
                  alt={car.title}
                  className="w-24 mx-auto"
                />
                <p className="text-sm">{car.address}</p>
                <p className="text-sm font-semibold">Price: {car.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
