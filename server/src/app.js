import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

/** This is a built-in middleware function in Express. It parses incoming requests with JSON payloads. It is based on body-parser */

app.use(express.json());
/**Parse Cookie header and populate req.cookies with an object keyed by the cookie names. */
app.use(cookieParser());
/**Cross-origin resource sharing (CORS) is a mechanism to safely bypass the same-origin policy, that is, it allows a web page to access restricted resources from a server on a domain different than the domain that served the web page.  */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, // This will allows us to set cookies
  })
);

// Mounting common routes using middleware
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

export default app;
