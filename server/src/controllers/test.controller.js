import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  try {
    console.log("In shouldBeLoggedIn controller, userID: ", req.userId);

    // Token verification is done by express middleware
    res.status(200).json({
      status: "success",
      data: {
        message: "You are authenticated",
      },
    });
  } catch (error) {
    console.log("Error in shouldBeLoggedIn controller", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error!",
    });
  }
};

/**Checks is admin or not */
export const shouldBeAdmin = async (req, res) => {
  try {
    //1)  Check for token exists or not
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        status: "fail",
        data: {
          message: "Not authorized!",
        },
      });
    }

    // 2) Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (err) {
        return res.status(403).json({
          status: "fail",
          data: {
            message: "Not authorized! Token is not valid.",
          },
        });
      }

      if (!payload.isAdmin) {
        return res.status(403).json({
          status: "fail",
          data: {
            message:
              "Not autorized! You dont have role of admin to access this page.",
          },
        });
      }
    });

    // 3) send response
    res.status(200).json({
      status: "success",
      data: {
        message: "You are authenticated as admin.",
      },
    });
  } catch (error) {
    console.log("test");
    res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
};
