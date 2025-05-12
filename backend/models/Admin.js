import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["techie", "main-admin", "obac"], default: "techie" }
});

export const Admin = mongoose.model("Admin", adminSchema);
