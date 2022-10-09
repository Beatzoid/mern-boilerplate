import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            minLength: 5
        },
        role: {
            type: Number,
            default: 0
        },
        token: {
            type: String
        },
        tokenExp: {
            type: Number
        }
    },
    { timestamps: true }
);

export default mongoose.model("users", userSchema);
