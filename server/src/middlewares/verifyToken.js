import { promisify } from "util";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma.js";

export const verifyToken = async (req, res, next) => {
  try {
    // 1) Get the token
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        status: "fail",
        data: {
          message: "Not authenticated.",
        },
      });
    }

    // Verify the obtained token using JWT and store in a variable
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );
    // console.log("DECODED: ", decoded);

    // Check if the user exists
    const currentUser = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!currentUser) {
      return res.status(401).json({
        status: "fail",
        message: "User belonging to this token doesnot exits😢",
      });
    }

    req.userId = currentUser.id;

    next();

    // async (err, payload) => {
    //   console.log("payload", payload);
    //   if (err) {
    //     return res.status(403).json({
    //       status: "fail",
    //       data: {
    //         message: "Not authenticated! Token is not Valid!",
    //       },
    //     });
    //   }
    //   // If token is valid, we add the userId in req object by getting the user id from payload
    //   req.userId = payload.id;
    // }
    // );

    // If everytning woks we call next
  } catch (error) {
    console.log("Error in verifyToken middleware: ", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};
