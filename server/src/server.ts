import mongoose from "mongoose";
import express from "express";

import helmet from "helmet";
import morgan from "morgan";

import { MONGODB_URI, PORT } from "./config/constants";

import logger from "./utils/logger";

const app = express();

app.use(morgan("dev"));
app.use(helmet());

mongoose.connect(MONGODB_URI, () =>
    logger.info("Successfully connected to mongodb")
);

app.get("/", (_, res) => {
    return res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => logger.info(`Listening on http://localhost:${PORT}`));
