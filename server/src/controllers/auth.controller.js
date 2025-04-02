import bcrypt from "bcrypt";
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

    // Send response
    res.status(201).json({
      status: "success",
      data: {
        message: "User created successfully",
        user,
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
export const login = (req, res) => {
  // db operations
};

/**Logout */
export const logout = (req, res) => {
  // db operations
};
