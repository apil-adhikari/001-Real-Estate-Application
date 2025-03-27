import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import { IoLocationOutline } from "react-icons/io5";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />

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
        <div className="wrapper">wrapper</div>
      </div>
    </div>
  );
};

export default SinglePage;
