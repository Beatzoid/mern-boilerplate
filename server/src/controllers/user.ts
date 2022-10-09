import { Request, Response } from "express";

import User from "../models/user";

import { validateRegisterFields } from "../utils/validate";

export const registerUser = async (req: Request, res: Response) => {
    const errors = validateRegisterFields(req.body);

    if (Object.keys(errors).length > 0) return res.status(400).json({ errors });

    const existingUser = await User.find({ email: req.body.email });
    if (existingUser.length > 0)
        return res.status(400).json({ err: "Email already in use" });

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();

    return res.json({ msg: "Register User" });
};
