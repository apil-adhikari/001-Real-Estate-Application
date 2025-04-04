import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../../lib/prisma.js";

/**Register a user */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the fields are filled
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "fail",
        data: {
          message: "Please enter all fields!",
        },
      });
    }

    // Check for unique username
    const userNameIsUsed = await prisma.user.findUnique({
      where: { username },
    });
    if (userNameIsUsed) {
      return res.status(400).json({
        status: "fail",
        data: {
          message:
            "That username is already taken! Please use another username.",
        },
      });
    }

    // Check if the user already exists with that  email address
    const userExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExists) {
      return res.status(400).json({
        status: "fail",
        data: {
          message:
            "User already exists with the email address. Please use use different email or login!",
        },
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("Hashed Password", hashedPassword);

    // Create a new user and save it to db
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(user);

    const { password: userPassword, ...userInfo } = user; // We seprate the password and other fields, we dont send password in response

    // Send response
    res.status(201).json({
      status: "success",
      data: {
        message: "User created successfully",
        user: userInfo, // Sending data other than passwords
      },
    });
  } catch (error) {
    console.log("Error in register controller: ", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

/**Login */
export const login = async (req, res) => {
  try {
    // Take all required inputs and destructure
    const { email, password } = req.body;
    // console.log(req.body);
    // console.log("Authorization Header: ", req.headers.authorization);

    // Check if requied fields are filled
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        data: {
          missingFields: ["email", "password"],
          message: "Please enter all fields!",
        },
      });
    }

    // Check if the user exists for the entered email
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return res.status(401).json({
        status: "fail",
        data: {
          message: "Invalid credintials!",
        },
      });
    }

    // Check if the password is correct
    // Check if the entered password matches with the password stored in db for the found (existing) user
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "fail",
        data: {
          message: "Invalid credintials!",
        },
      });
    }

    // Generate Token
    // res.setHeader("Set-Cookie", "text=" + "myvalue"); // Manually sending cookies header

    const token = jwt.sign(
      { id: existingUser.id, isAdmin: true },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_SECRET_EXPIRES_IN }
    );

    // Define the cookie options
    const cookieOptions = {
      maxAge: 3600000, //Cookie will expire in 1 hour(360000 miliseconds)
      httpOnly: true, // Makes the cookie inaccessible to the client-side JavaScritp
      secure: true, //Ensure cookie are sent over HTTPS
    };

    // We do not send the password as response(even it is hashed)
    const { password: userPassword, ...userInfo } = existingUser;

    res
      .cookie("token", token, cookieOptions)
      .status(200)
      .json({
        status: "success",
        data: {
          message: "Logged in successfully!",
          user: userInfo, //
        },
      });
  } catch (error) {
    console.log("Error in login controller: ", error);
    res.status(500).json({
      status: "error",
      mesasge: "Something went wrong!",
    });
  }
};

/**Logout */
export const logout = (req, res) => {
  try {
    res
      .clearCookie("token") // We can either clear cookie or set new cookie with same name
      // .cookie("token", "token-expired", {
      //   expires: new Date(Date.now() + 10 * 1000),
      //   httpOnly: true,
      // })
      .status(200)
      .json({
        status: "success",
        data: {
          message: "Logged out successfully",
        },
      });
  } catch (error) {
    console.log("Error in logout controller: ", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};
