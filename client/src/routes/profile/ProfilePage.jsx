import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";

import React from "react";

const ProfilePage = () => {
  const navigate = useNavigate();

  // FUNCTION TO HANDLE LOGOUT
  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      // CLEAR LOCAL STORAGE
      localStorage.removeItem("user");

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
                <sapn>Name: </sapn>
                Jenny Martin
              </div>
              <div className="userEmail">
                <span>Email: </span>jennymartin@gmail.com
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
              src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile Picture"
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
