import express from "express";

import helmet from "helmet";
import morgan from "morgan";

import { PORT } from "./config/constants";

import logger from "./utils/logger";

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.get("/", (_, res) => {
    return res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => logger.info(`Listening on http://localhost:${PORT}`));
