import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log("Hashed Password", hashedPassword);

  // Create a new user and save it to db
};

export const login = (req, res) => {
  // db operations
};

export const logout = (req, res) => {
  // db operations
};
