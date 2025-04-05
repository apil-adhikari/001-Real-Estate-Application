import jwt from "jsonwebtoken";

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
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      async (err, payload) => {
        if (err) {
          return res.status(403).json({
            status: "fail",
            data: {
              message: "Not authenticated! Token is not Valid!",
            },
          });
        }

        // If token is valid, we add the userId in req object by getting the user id from payload
        req.userId = payload.id;
      }
    );

    console.log("DECODED: ", decoded);

    // If everytning woks we call next
    next();
  } catch (error) {
    console.log("Error in verifyToken middleware: ", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};
