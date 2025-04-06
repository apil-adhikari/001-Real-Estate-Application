import React, { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { IoIosSave, IoMdCloudUpload } from "react-icons/io";
import { FaImage, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

const ProfileUpdatePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profileUpdatePage">
      <div className="container">
        <div className="topSection">
          <div className="info">
            <h1>Your Profile</h1>
            <span>Last edit on 12 Feburary 2025</span>
          </div>
          <div className="actions">
            <button className="discardChanges">Discard</button>
            <button className="saveChanges">
              <IoIosSave />
              Save
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottomSection">
          {/* Profile Picture */}
          <div className="profileSection">
            <h2 className="subTitle">
              <FaImage className="icon" />
              Profile picture
            </h2>
            <div className="profileSectionDetails">
              <img
                src={currentUser.data.user.avatar || "/defaultImage.png"}
                alt="user profile"
              />
              <button className="changeProfileImage">
                <IoMdCloudUpload /> Change picture
              </button>
              <button className="deleteProfileImage">
                <MdDelete /> Delete picture
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="personalInfoSection">
            <h2 className="subTitle">
              <FaUser className="icon" /> Personal information
            </h2>
            <div className="personalDetails">
              <div className="eachDetail">
                <label htmlFor="username">Username </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue={currentUser.data.user.username}
                  placeholder="John Doe"
                />
              </div>

              <div className="eachDetail">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={currentUser.data.user.email}
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="eachDetail">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
