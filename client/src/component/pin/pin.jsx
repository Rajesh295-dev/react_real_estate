// import React from "react";
// import { Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";
// import "./pin.scss";

// function Pin({ item }) {
//   console.log("Item Data:", item);

//   // Choose an image from the array (e.g., first image)
//   const selectedImage =
//     item.images && item.images.length > 0
//       ? item.images[0] // Replace 0 with logic for dynamic selection
//       : "https://via.placeholder.com/150"; // Fallback for missing images

//   return (
//     <Marker position={[item.latitude, item.longitude]}>
//       <Popup className="popup">
//         <div className="popupContainer">
//           <img
//             src={selectedImage}
//             alt={item.title || "Property Image"}
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/150"; // Fallback for broken images
//             }}
//           />
//           <div className="textContainer">
//             <Link to={`/${item.id}`}>{item.title}</Link>
//             <span>{item.bedroom} bedroom</span>
//             <b>$ {item.price}</b>
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// }

// export default Pin;

import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

function Pin({ item }) {
  const selectedImage =
    item.images && item.images.length > 0
      ? item.images[0]
      : "https://via.placeholder.com/150";

  return (
    <Marker
      position={[item.latitude, item.longitude]}
      eventHandlers={{
        mouseover: (e) => {
          e.target.openPopup(); // Open popup on hover
        },
        mouseout: (e) => {
          e.target.closePopup(); // Close popup when mouse leaves
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
