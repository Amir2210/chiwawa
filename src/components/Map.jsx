import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  useMap,
} from "react-leaflet";
import { useGlobalContext } from "../AppContext";
import { useEffect, useState } from "react";

export function Map() {
  const { locations, selectedStoreLocation } = useGlobalContext();

  function MapAutoPan({ selectedStoreLocation }) {
    const map = useMap();
    useEffect(() => {
      if (selectedStoreLocation) {
        map.setView(
          [selectedStoreLocation.Latitude, selectedStoreLocation.Longitude],
          map.getZoom(),
          {
            animate: true,
          }
        );
      }
    }, [selectedStoreLocation, map]);
    return null;
  }
  return (
    <div className="col-span-2 w-full h-full flex items-center justify-center">
      <MapContainer
        center={[56.1721987, 93.6466243]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-[80vh] rounded-lg shadow-lg leaflet-container"
      >
        <TileLayer
          attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.Latitude, loc.Longitude]}>
            <Popup>
              <p>Store Name: {loc.StoreName}</p>
              <p>Adress (ZipCode): {loc.ZipCode}</p>
            </Popup>
          </Marker>
        ))}
        {/* <MapClick setLocations={setLocations} /> */}
        <MapAutoPan selectedStoreLocation={selectedStoreLocation} />
      </MapContainer>
    </div>
  );
}
