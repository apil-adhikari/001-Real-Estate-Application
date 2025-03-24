import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import app from "./src/app.js"; // Importing Express application

const port = process.env.PORT || 8001;
console.log(port);
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
