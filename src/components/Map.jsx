import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
export function Map() {
  return (
    <div className="col-span-2 w-full h-full flex items-center justify-center">
      <MapContainer
        center={[31.5257, 34.599998]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-[80vh] rounded-lg shadow-lg leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))} */}
        {/* <MapClick setLocations={setLocations} />
        <MapAutoPan selected={selected} /> */}
      </MapContainer>
    </div>
  );
}
