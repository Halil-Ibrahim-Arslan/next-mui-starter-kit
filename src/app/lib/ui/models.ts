import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

export const Course =
  mongoose.models.User || mongoose.model("User", userSchema);
