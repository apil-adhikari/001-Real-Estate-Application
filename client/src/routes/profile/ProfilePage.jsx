import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  // FUNCTION TO HANDLE LOGOUT
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      // CLEAR LOCAL STORAGE
      // localStorage.removeItem("user");
      // We clear the user data using context api
      updateUser(null);

      // AND NAVIGATE TO HOMEPAGE
      navigate("/");
    } catch (error) {
      console.log("Error in logout(profile page): ", error);
    }
  };

  return (
    <div className="profilePage">
      <div className="leftContainer">
        {/* User Profile */}
        <div className="userProfileContainer">
          <div className="containerHeader">
            <h1>User Information</h1>
            <button>Update</button>
          </div>

          <div className="userDetails">
            <div className="nameEmailContainer">
              <div className="userName">
                <span>Name: </span>
                {currentUser.data.user.username}
              </div>
              <div className="userEmail">
                <span>Email: </span>
                {currentUser.data.user.email}
              </div>

              {/* LOGOUT BUTTON */}
              <div>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

            <img
              className="userAvatar"
              src={currentUser.data.user.avatar || "/defaultImage.png"}
              alt={currentUser.data.user.username}
            />
          </div>
        </div>

        {/* My Listings */}
        <div className="userListingsContainer">
          <div className="containerHeader">
            <h1>My Listings</h1>
            <button>Add Post</button>
          </div>
          <div className="userAddedPost">
            <List />
          </div>
        </div>

        {/* Saved */}
        <div className="userSavedContainer">
          <div className="containerHeader">
            <h1>Saved Posts</h1>
          </div>
          <div className="userSavedCards">
            <List />
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="rightContainer">
        <Chat />
      </div>
    </div>
  );
};

export default ProfilePage;
