import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import { IoLocationOutline } from "react-icons/io5";
import Map from "../../components/map/Map";
import {
  MdBookmarkAdd,
  MdChat,
  MdOutlineBathroom,
  MdOutlinePets,
} from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GiBusStop, GiCash } from "react-icons/gi";
import { RiCustomSize } from "react-icons/ri";
import { FaBed, FaSchool } from "react-icons/fa";
import { BsHospital } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { GrRestaurant } from "react-icons/gr";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          {/* Image Slider */}
          <Slider images={singlePostData.images} title={singlePostData.title} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <p className="address">
                  <IoLocationOutline />
                  <span>{singlePostData.address}</span>
                </p>

                <p className="price">$ {singlePostData.price}</p>
              </div>
              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-wrapper">
          <h3 className="title">General</h3>
          <div className="generalList">
            <div className="feature">
              <HiOutlineWrenchScrewdriver className="feature-icon" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <MdOutlinePets className="feature-icon" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets are allowed</p>
              </div>
            </div>
            <div className="feature">
              <GiCash className="feature-icon" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rend in total household income</p>
              </div>
            </div>
          </div>
          <h3 className="title">Rooms Sizes</h3>
          <div className="sizeList">
            <div className="size">
              <RiCustomSize className="feature-icon" />
              <span>80sq feet</span>
            </div>
            <div className="size">
              <FaBed className="feature-icon" />
              <span>4 Bedrooms</span>
            </div>
            <div className="size">
              <MdOutlineBathroom className="feature-icon" />
              <span>2 Bathrooms</span>
            </div>
          </div>

          {/* Nearby Places */}
          <h3 className="title">Nearby Places</h3>
          {/* school,hospital, bus stop, resturant */}
          <div className="nearbyPlacesCardContainer">
            <div className="eachNearbyPlace">
              <FaSchool className="feature-icon" />
              <div className="nearbyPlaceDescription">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="eachNearbyPlace">
              <BsHospital className="feature-icon" />
              <div className="nearbyPlaceDescription">
                <span>Hospital</span>
                <p>300m away</p>
              </div>
            </div>
            <div className="eachNearbyPlace">
              <GiBusStop className="feature-icon" />
              <div className="nearbyPlaceDescription">
                <span>Bus Stop</span>
                <p>200m away</p>
              </div>
            </div>
            <div className="eachNearbyPlace">
              <GrRestaurant className="feature-icon" />
              <div className="nearbyPlaceDescription">
                <span>Resturant</span>
                <p>250m away</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <h3 className="title">Location</h3>
          <div className="mapContainer">
            <Map className="map" items={[singlePostData]} />
          </div>

          {/* Interactive Buttons */}
          <div className="interactionButtons">
            <button>
              <MdChat /> Send Message
            </button>
            <button>
              <MdBookmarkAdd /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
