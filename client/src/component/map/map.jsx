// import "./map.scss";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer } from "react-leaflet";
// import Pin from "../pin/pin";

// function Map({ items }) {
//   const defaultCenter = [37.0902, -95.7129]; // Center of the USA
//   const defaultZoom = 4; // Zoom level to cover the entire USA
//   return (
//     <MapContainer
//       className="map"
//       center={defaultCenter}
//       zoom={defaultZoom}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {items.map((item) => (
//         <Pin item={item} key={item.id} />
//       ))}
//     </MapContainer>
//   );
// }

// export default Map;

import React, { useRef, useEffect } from "react";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/pin";

function Map({ items, isMapView }) {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current && isMapView) {
      const mapInstance = mapRef.current;
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 0); // Delay to ensure DOM updates before recalculating size
    }
  }, [isMapView]);

  const defaultCenter = [37.0902, -95.7129]; // Center of the USA
  const defaultZoom = 4; // Zoom level to cover the entire USA

  return (
    <MapContainer
      className="map"
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
      ref={(ref) => {
        if (ref) mapRef.current = ref;
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
