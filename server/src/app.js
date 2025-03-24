import express from "express";
import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

/** This is a built-in middleware function in Express. It parses incoming requests with JSON payloads. It is based on body-parser */
app.use(express.json());

// Mounting common routes using middleware
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

export default app;
