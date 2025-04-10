//  CRUD Operations:get all user, get a single user, delete user and update user info

import prisma from "../../lib/prisma.js";

// get single user information
export const getUser = async (req, res) => {
  try {
    console.log("---In getUser() controller---");
    const document = await prisma.user.findUnique(req.params.id);
    console.log(document);
  } catch (error) {
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
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};

// update user information
export const updateUser = async (req, res) => {
  try {
  } catch (error) {
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
