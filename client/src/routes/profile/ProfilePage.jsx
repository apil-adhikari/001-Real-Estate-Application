import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

import React from "react";

const ProfilePage = () => {
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
