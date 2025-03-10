import React from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";
const leafimg = "./marker-icon-2x.png";

// Define the custom marker icon
const customIcon = icon({
  iconUrl: "/marker-icon-2x.png", // Ensure this path is correct
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

console.log("Custom Icon:", customIcon);

function Pin({ item }) {
  console.log("Item:", item);

  const selectedImage =
    item.images && item.images.length > 0
      ? item.images[0]
      : "https://via.placeholder.com/150";

  return (
    <Marker
      position={[item.latitude, item.longitude]}
      icon={customIcon} // Use the custom icon
      eventHandlers={{
        mouseover: (e) => {
          e.target.openPopup();
        },
        mouseout: (e) => {
          e.target.closePopup();
        },
      }}
    >
      <Popup className="popup" autoPan={false}>
        <div className="popupContainer">
          <img
            src={selectedImage}
            alt={item.title || "Property Image"}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150"; // Fallback for broken images
            }}
          />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
