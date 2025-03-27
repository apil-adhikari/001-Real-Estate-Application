import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaBed, FaToilet } from "react-icons/fa";
import { MdBookmarkAdd, MdChat } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <IoLocationOutline />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features-icons">
            <div className="feature-icon">
              <FaBed />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="feature-icon">
              <FaToilet />

              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>

          <div className="interact-icons">
            <div className="interact-icon">
              <MdBookmarkAdd />
            </div>
            <div className="interact-icon">
              <MdChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
