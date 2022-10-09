import { Router } from "express";

import { registerUser } from "../controllers/user";

const router = Router();

router.get("/user/register", registerUser);

export default router;
