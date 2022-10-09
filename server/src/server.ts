import mongoose from "mongoose";
import express from "express";

import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { MONGODB_URI, PORT } from "./config/constants";

import logger from "./utils/logger";

import userRoutes from "./routes/user";

const app = express();

// Middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

console.log(MONGODB_URI);
// Database
mongoose.connect(MONGODB_URI, () =>
    logger.info("Successfully connected to mongodb")
);

// Routes

app.get("/", (_, res) => res.json({ msg: "Hello World!" }));

app.use("/api", userRoutes);

app.listen(PORT, () => logger.info(`Listening on http://localhost:${PORT}`));
