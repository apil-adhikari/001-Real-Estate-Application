import bcrypt from "bcrypt";

/**Register a user */
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("req.body: ", req.body);

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

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log("Hashed Password", hashedPassword);

  // Create a new user and save it to db
};

/**Login */
export const login = (req, res) => {
  // db operations
};

/**Logout */
export const logout = (req, res) => {
  // db operations
};
