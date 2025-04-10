//  CRUD Operations:get all user, get a single user, delete user and update user info

import bcrypt from "bcrypt";
import prisma from "../../lib/prisma.js";

// get single user information
export const getUser = async (req, res) => {
  try {
    console.log("---In getUser() controller---");

    // Get the id of the user to find from request parameter
    const id = req.params.id;
    console.log(id);
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "No user found with that id!",
      });
    }
    console.log(user);

    // Send response
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log("Error in getUser() controller: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};

// get all user information
export const getAllUsers = async (req, res) => {
  try {
    // 1) FindAll query: to get all users, we need to find all the users in the database
    console.log("In getAllUsers() controller: ");
    const users = await prisma.user.findMany();
    res.status(200).json({
      status: "success",
      results: `${users.length} users found`,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log("Error in getAllUsers() controller: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};

// update user information
export const updateUser = async (req, res) => {
  try {
    // 1) Get user from parameter
    const id = req.params.id;
    const loggedInUserId = req.userId;
    const { password, avatar, ...otherData } = req.body;
    // console.log("other data", ...[otherData]);

    // Only allow the logged in user to change his own information only
    if (id !== loggedInUserId) {
      return res.status(403).json({
        status: "fail",
        message:
          "Not authorized! You dont have permission to change other user details 😠",
      });
    }

    // If user is found, udate the user data coming from req.body
    // const bodyData = req.body;
    // console.log(bodyData);

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "No user found with that id 😟",
      });
    }

    // If there is password, we need to hash it first before updating the user
    let updatePassword = null;
    if (password) {
      const salt = await bcrypt.genSalt(12);
      updatePassword = await bcrypt.hash(password, salt);
    }

    // Else update the user:
    const updatedUser = await prisma.user.update({
      where: { id },
      data: req.body, // data coming from req.body
    });

    res.status(200).json({
      status: "success",
      data: {
        ...otherData,
        ...(updatePassword && { password: updatePassword }),
        ...(avatar && { avatar }),
      },
    });
  } catch (error) {
    console.log("Error in updateUser() controller: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};

// delete user information
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};
