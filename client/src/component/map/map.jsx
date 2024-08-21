import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/pin";

function Map({ items }) {
  const defaultCenter = [34.018307, -118.504581]; // Center of the USA
  const defaultZoom = 18; // Zoom level to cover the entire USA
  return (
    <MapContainer
      className="map"
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
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
