import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    age: {
      type: Number,
      min: [0, "Age must be a positive number"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const User = mongoose.model("User", userSchema);