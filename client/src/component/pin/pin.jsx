import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

function Pin({ item }) {
  // console.log(item.latitude, item.longitude, item.price);
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <Marker
      position={[item.latitude, item.longitude]}
      // eventHandlers={{
      //   mouseover: () => {
      //     setIsHovered(true);
      //   },
      //   mouseout: () => {
      //     setIsHovered(false);
      //   },
      // }}
    >
      <Popup className="popup">
        <div className="popupContainer">
          <img src={item.img} alt=""></img>
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
