import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircle,
} from "react-icons/io";
import "./slider.scss";
import React, { useState } from "react";

const Slider = ({ images, title }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex == 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <IoIosArrowDropleftCircle onClick={() => changeSlide("left")} />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <IoIosArrowDroprightCircle onClick={() => changeSlide("right")} />
          </div>

          <div className="closeFullSlider">
            <IoIosCloseCircle onClick={() => setImageIndex(null)} />
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt={title} onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={title}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
