import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  // Call the context
  // const { currentUser } = useContext(AuthContext);
  // console.log("Current User: ", currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and Get Your Dream Place.</h1>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            quis culpa necessitatibus cum magni quae eligendi officiis est omnis
            consectetur in eos quo ratione quos sed amet magnam adipisci
            consequatur doloribus eius temporibus? Soluta sed possimus,
            voluptatem illum pariatur assumenda nemo id labore facere fugiat qui
            non, enim eos eveniet.
          </p>

          {/* ---Search Bar --- */}
          <SearchBar />

          {/* ---Boxes --- */}
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="background image" />
      </div>
    </div>
  );
};

export default HomePage;
