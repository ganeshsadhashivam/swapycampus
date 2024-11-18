import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: [true, "Please provide a username"] },
  lastname: { type: String, required: [true, "Please provide a lastname"] },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: { type: String, required: [true, "Password Required"] },

  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = models.user || mongoose.model("User", userSchema);

export default User;
