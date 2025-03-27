import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import React from "react";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]} className="pin">
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <strong>$ {item.price}</strong>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
